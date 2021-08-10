import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styled from "@emotion/styled";
import Color from "color";
import { get } from "lodash";

import Nodes from "pages/Home/Header/components/nodes";

import { useLerp } from "pages/Home/Header/utils/lerp";
import { useNodesBuffers, useEdgesBuffers } from "pages/Home/Header/utils/buffers";
import { getDataInfos, getColorScales } from "pages/Home/Header/utils/bounds";
import { layouts } from "pages/Home/Header/utils/layouts";
import getRelations, { hierarchyRelation, logicLinks } from "pages/Home/Header/utils/relations";

import axios from "axios";
import pako from "pako";
import togglInputsGZ from "pages/Home/Header/data/inputs.json.gz";

import { moveCamera } from "pages/Home/Header/utils/anim";

const correspondance = {
	0: 2,
	1: 6,
	2: 1,
	3: 4,
	4: 3,
	5: 7,
	6: 5,
	7: 8
};

const ChartContainer = styled.div`
  width: 200%; 
  height: 70vh;
  justify-self: center; /* vertical */
  align-self: center; /* horizontal */
`;

let posBuffersInc = 0;
window.posBuffers = {};

const useLayout = (
	inputs,
	links,
	{ layout },
	colorScale,
	settings,
	dataInfos
) => {
	const [nodesBuffers, howManyNodes] = useNodesBuffers(inputs);
	const [edgesBuffers, howManyEdges] = useEdgesBuffers(links);

	useEffect(() => {
		const update = () => {
			const layoutFn = layout(null, null, null, inputs);

			let v1index = 0;
			while (howManyNodes > v1index) {
				const datum = inputs[v1index];
				const v3index = v1index * 3;
				// position to lerp buffer
				const position = layoutFn(datum);
				nodesBuffers[4][v3index + 0] = position[0];
				nodesBuffers[4][v3index + 1] = position[1];
				nodesBuffers[4][v3index + 2] = position[2];
				// color
				const c = colorScale(datum);
				const cc = Color(c).color.map((d) => d / 255);
				nodesBuffers[1][v3index + 0] = cc[0];
				nodesBuffers[1][v3index + 1] = cc[1];
				nodesBuffers[1][v3index + 2] = cc[2];
				v1index++;
			}
		};

		window.posBuffers[posBuffersInc++] = [
			nodesBuffers[4],
			nodesBuffers[1]
		];

		update();
	}, [
		inputs,
		howManyNodes,
		nodesBuffers,
		howManyEdges,
		edgesBuffers,
		layout,
		colorScale,
		settings,
		dataInfos
	]);

	return [nodesBuffers, edgesBuffers];
};

const Rotation = () => {
	const { camera } = useThree();
	const currentRad = useRef(0);

	useFrame(() => {
		camera.position.set(...moveCamera(currentRad.current, 0, 1200));
		camera.lookAt(0, 0, 0);
		currentRad.current += 0.001;
	}, 0);

	return null;
};

const Chart = ({ dataWorker, togglInputs }) => {
	const [dataInfos, colorScales] = useMemo(() => {
		const dataInfos = getDataInfos(togglInputs, {});
		return [dataInfos, getColorScales(dataInfos, {})];
	}, [togglInputs]);

	const settings = useMemo(() => {
		return {
			layout: "coral",
			colorScale: Object.keys(colorScales.scales)[0],
			nodes: {
				display: true,
				opacity: 1,
				width: 1.5
			},
			edges: {
				display: true,
				opacity: 0.1,
				width: 1,
				deduped: true
			}
		};
	}, [colorScales]);

	const usableLayout = layouts[settings.layout];

	const linksType = useMemo(() => {
		return (settings.layout === "coral" || settings.layout === "WDMTG")
			? hierarchyRelation
			: settings.layout === "forceLayout"
				? logicLinks
				: getRelations;
	}, [settings.layout]);

	const updateLinks = useCallback(() => {
		return linksType(togglInputs, get(settings, "edges.deduped", true));
	}, [togglInputs, linksType, settings]);

	const links = useMemo(() => {
		return updateLinks(linksType);
	}, [linksType, updateLinks]);

	const [nodesBuffers, edgesBuffers] = useLayout(
		togglInputs,
		links,
		usableLayout,
		colorScales.scales[settings.colorScale],
		settings,
		dataInfos
	);
	useLerp(
		[nodesBuffers[0], nodesBuffers[4]],
		[edgesBuffers[0], edgesBuffers[1], links]
	);

	useEffect(() => {
		if (dataWorker === null) {
			togglInputs.forEach((_, v1index) => {
				nodesBuffers[3][v1index] = 1;
			});
		} else {
			const hoveredValue = correspondance[dataWorker];
			togglInputs.forEach((d, v1index) => {
				nodesBuffers[3][v1index] = d.user === hoveredValue
					? 1
					: 0.1;
			});
		}
	}, [togglInputs, dataWorker, nodesBuffers]);

	return (
		<ChartContainer>
			<Canvas
				pixelRatio={window.devicePixelRatio}
				camera={{ near: 0.1, far: 5000, position: [0, 0, window.innerHeight] }}
			>
				<Nodes display={settings.nodes.display} buffers={nodesBuffers} />
				<Rotation />
			</Canvas>
		</ChartContainer>
	);
};

const Wrapper = ({ dataWorker }) => {
	const [inputs, setInputs] = useState(null);

	useEffect(() => {
		axios({
			method: "get",
			url: togglInputsGZ,
			responseType: "arraybuffer"
		})
			.then(function (response) {
				setInputs(
					JSON.parse(pako.ungzip(response.data, { to: "string" }))
				);
			});
	}, []);

	return inputs && (
		<Chart dataWorker={dataWorker} togglInputs={inputs} />
	);
};
export default Wrapper;
