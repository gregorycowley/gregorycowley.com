import React, { useRef, useCallback, useEffect, useMemo, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { injectIntl } from 'react-intl'
import { Canvas } from "@react-three/fiber";
import styled from '@emotion/styled'
import Color from 'color'
import { values } from 'lodash'

import { Title1 } from "components/Redoute/titles";

import mq from 'common/styles/breakpoints'

import grid from "layout/Layout";

// import Nodes from './components/nodes'
// import Edges from "./components/edges";

// import { useLerp } from './utils/lerp'
import { useNodesBuffers, useEdgesBuffers } from './utils/buffers'
import { getDataInfos, getColorScales } from './utils/bounds'
import { layouts } from './utils/layouts'
import { Animation, backgrounds } from './utils/anim'
import getLinks, { hierarchyRelation, logicLinks } from './utils/relations'

import axios from 'axios'
import pako from 'pako'

// import defaultBounds from './utils/capture/defaultBounds.json'
// import pointsGZ from './utils/capture/points_w_ratio.json.gz'
// import linksGZ from './utils/capture/links.json.gz'
import { headerHeight } from "layout/Header/constants";

const TitleContainer = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${grid};
`

const TitleHome = styled(Title1)`
  font-family: Apercu;
  font-weight: 400;
  text-shadow: 0px 0px 10px #000000;
  grid-column: 5 / -5;
  font-size: clamp(34px, 5vw, 55px);
  line-height: 120%;
  text-align: center;
  position: relative;
  color: white;
  max-width: 45ch;

  ${mq('small')} {
    grid-column: 3 / -3;
  }

  ${mq('extraSmall')} {
    font-size: clamp(24px, 5vw, 55px);
  }
`

const MenuBackground = styled.div`
  position: absolute;
  width: 100%;
  height: ${headerHeight}px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, ${({ bg }) => bg} 28%, rgba(1, 13, 40, 0) 100%);
  
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ bg }) => bg};
  transition: background 1s;
  position: relative;
  :after {
    pointer-events: none;
    content: '';
    position absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: calc(100vh - 100px);
    height: 100px;
    transition: background 1s;
    background: linear-gradient(180deg, ${({ bg }) => Color(bg).alpha(0).toString()}, ${({ bg }) => bg});
  }
`

const captured = true
window.capturePosBuffers = {}
window.captureLinks = {}

function useLayout (
  capturedPoints,
  inputs,
  links,
  { layout },
  colorScale,
  axis1, axis2, axis3,
  settings,
  dataInfos
) {
  const posBuffersInc = useRef(-1)
  const [nodesBuffers, howManyNodes] = useNodesBuffers(inputs)
  const [edgesBuffers, howManyEdges] = useEdgesBuffers(links)

  useEffect(() => {
    function update () {
      if (captured && posBuffersInc.current > 7) posBuffersInc.current = 0

      if (!captured) {
        const layoutFn = layout(axis1, axis2, axis3, inputs)

        let v1index = 0
        while (howManyNodes > v1index) {
          const datum = inputs[v1index]
          const v3index = v1index * 3
          // position to lerp buffer
          const position = layoutFn(datum)
          nodesBuffers[4][v3index + 0] = position[0]
          nodesBuffers[4][v3index + 1] = position[1]
          nodesBuffers[4][v3index + 2] = position[2]
          // color
          const c = [1, 0, 0]
          const cc = Color(c).color.map((d) => d / 255)
          nodesBuffers[1][v3index + 0] = cc[0]
          nodesBuffers[1][v3index + 1] = cc[1]
          nodesBuffers[1][v3index + 2] = cc[2]
          v1index++
        }
      }

      if (captured && posBuffersInc.current >= 0) {
        nodesBuffers[4].set(capturedPoints[posBuffersInc.current][0])
        nodesBuffers[1].set(capturedPoints[posBuffersInc.current][1])
      }
      if (captured) posBuffersInc.current++

      if (!captured) {
        window.capturePosBuffers[posBuffersInc.current] = [
          [...nodesBuffers[4]],
          [...nodesBuffers[1]]
        ]
        posBuffersInc.current++
      }
    }

    update()
  }, [
    capturedPoints,
    inputs,
    howManyNodes,
    nodesBuffers,
    howManyEdges,
    edgesBuffers,
    layout,
    colorScale,
    axis1, axis2, axis3,
    settings,
    dataInfos
  ])

  return [nodesBuffers, edgesBuffers]
}

const togglInputs = Array(6899).fill()

function webGLSupport () {
  try {
    var canvas = document.createElement('canvas')
    return !!window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch (e) {
    return false
  }
};

const isWebglEnabled = webGLSupport()

function Header ({ capturedPoints, capturedLinks }) {
  const [step, setStep] = useState(1)
  const [background, setBackground] = useState(backgrounds[0])

  const colorScales = useMemo(() => {
    return getColorScales(defaultBounds, {})
  }, [])

  const [edgeOpacity, setEdgeOpacity] = useState(0)
  const [settings, setSettings] = useState({
    layout: Object.keys(layouts)[0],
    colorScale: Object.keys(colorScales.scales)[0],
    nodes: {
      display: true,
      opacity: 1,
      width: 1
    },
    edges: {
      display: true,
      opacity: 0.1,
      width: 1,
      deduped: true
    },
    axises: {
      axis1: {
        value: 'startDay',
        bounds: {
          values: [0, 360]
        }
      },
      axis2: {
        value: 'startTime',
        bounds: {
          values: [100, 500]
        }
      },
      axis3: {
        value: 'collaborationNumber',
        bounds: {
          values: [-300, 300]
        }
      }
    }
  })

  const dataInfos = useMemo(() => {
    if (captured) {
      return defaultBounds
    } else {
      return getDataInfos(togglInputs, {})
    }
  }, [])

  const usableLayout = layouts[settings.layout]

  const usableAxises = useMemo(() => {
    return Object.keys(settings.axises).reduce((p, c) => {
      p[c] = {
        ...settings.axises[c],
        bounds: {
          ...settings.axises[c].bounds,
          step: usableLayout.config[c].step,
          min: usableLayout.config[c].min,
          max: usableLayout.config[c].max
        }
      }
      return p
    }, {})
  }, [settings, usableLayout])

  const [axis1, axis2, axis3] = useMemo(() => {
    const axis1 = {
      range: usableAxises.axis1.bounds.values,
      bounds: dataInfos.bounds[usableAxises.axis1.value],
      accessor: dataInfos.accessors[usableAxises.axis1.value]
    }
    const axis2 = {
      range: usableAxises.axis2.bounds.values,
      bounds: dataInfos.bounds[usableAxises.axis2.value],
      accessor: dataInfos.accessors[usableAxises.axis2.value]
    }
    const axis3 = {
      range: usableAxises.axis3.bounds.values,
      bounds: dataInfos.bounds[usableAxises.axis3.value],
      accessor: dataInfos.accessors[usableAxises.axis3.value]
    }

    return [axis1, axis2, axis3]
  }, [dataInfos, usableAxises])

  const linksType = useMemo(() => {
    return (settings.layout === 'coral' || settings.layout === 'WDMTG')
      ? { name: 'hierarchyRelation', fn: hierarchyRelation }
      : settings.layout === 'forceLayout'
        ? { name: 'logicLinks', fn: logicLinks }
        : { name: 'getLinks', fn: getLinks }
  }, [settings.layout])

  const updateLinks = useCallback(() => {
    let l
    if (!captured) {
      l = linksType.fn(togglInputs, true)
      window.captureLinks[linksType.name] = l
    } else {
      l = capturedLinks[linksType.name]
    }
    return l
  }, [capturedLinks, linksType])

  const links = useMemo(() => {
    return updateLinks(linksType)
  }, [linksType, updateLinks])

  const [nodesBuffers, edgesBuffers] = useLayout(
    capturedPoints,
    togglInputs,
    links,
    usableLayout,
    colorScales.scales[settings.colorScale],
    axis1, axis2, axis3,
    settings,
    dataInfos
  )
  // useLerp(
  //   [nodesBuffers[0], nodesBuffers[4]],
  //   [edgesBuffers[0], edgesBuffers[1], links]
  // )

  return (
    <Container bg={background}>
      {
        // isWebglEnabled && (
        //   <Canvas
        //     style={{
        //       position: 'absolute',
        //       zIndex: 0,
        //       height: window.innerHeight,
        //       opacity: 0.8
        //     }}
        //     height={window.innerHeight}
        //     pixelRatio={window.devicePixelRatio}
        //     camera={{ near: 0.1, far: 5000, position: [0, 0, window.innerHeight * 0.5] }}
        //   >
        //     {/* <Effect /> */}
        //     <Edges display={!!edgeOpacity} opacity={edgeOpacity} buffers={edgesBuffers} />
        //     <Nodes display={settings.nodes.display} buffers={nodesBuffers} />
        //     <Animation
        //       settings={settings}
        //       setSettings={setSettings}
        //       setEdgeOpacity={setEdgeOpacity}
        //       setBackground={setBackground}
        //       setStep={setStep}
        //     />
        //   </Canvas>
        // )
      }
      <MenuBackground bg={background} />
      <Title current={step} bg={background} />
    </Container>
  )
}

const Title = injectIntl(
  ({ intl, current, bg }) => {
    const [items, set] = useState([])

    useEffect(() => {
      set({
        text: intl.formatMessage({ id: `home-main-title-${current}` }),
        key: `${current}`
      })
    }, [current, set, intl])

    const config = { mass: 1, tension: 140, friction: 40 }

    const transitions = useTransition(items, {
      config,
      trail: 1500,
      initial: { opacity: 0, position: 'absolute', transform: 'translate3d(10px,-50%,0)' },
      from: { opacity: 0, position: 'absolute', transform: 'translate3d(10px,-50%,0)' },
      enter: { opacity: 1, position: 'absolute', transform: 'translate3d(0px,-50%,0)' },
      leave: { opacity: 0, position: 'absolute', transform: 'translate3d(-10px,-50%,0)' },
      keys: item => item.key
    })

    return (
      <TitleContainer>
        <TitleHome bg={bg}>
          <div key={current}>
            {
              transitions((style, item) => {
                return <animated.div style={style}>{item.text}</animated.div>
              })
            }
          </div>
        </TitleHome>
      </TitleContainer>
    )
  }
)

const Wrapper = () => {
  const [capturedPoints, setCapturedPoints] = useState(null)
  const [capturedLinks, setCapturedLinks] = useState(null)

  useEffect(() => {
    axios({
      method: 'get',
      url: pointsGZ,
      responseType: 'arraybuffer'
    })
      .then(function (response) {
        const data = JSON.parse(pako.ungzip(response.data, { to: 'string' }))

        if ((window.innerWidth || window.innerHeight) <= 600) {
          let v3index
          Array(data[5][0].length / 3)
            .fill()
            .forEach((_, v1index) => {
              v3index = v1index * 3
              const x = data[5][0][v3index + 0]
              data[5][0][v3index + 0] = data[5][0][v3index + 1] * 0.6
              data[5][0][v3index + 1] = -x * 0.6
            })
        }

        setCapturedPoints(
          data
            .map((d) => {
              return [
                new Float32Array(values(d[0])),
                new Float32Array(values(d[1]))
              ]
            })
        )
      })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: linksGZ,
      responseType: 'arraybuffer'
    })
      .then(function (response) {
        setCapturedLinks(
          JSON.parse(pako.ungzip(response.data, { to: 'string' }))
        )
      })
  }, [])

  return (capturedPoints && capturedLinks) && (
    <Header
      capturedPoints={capturedPoints}
      capturedLinks={capturedLinks}
    />
  )
}
export default Wrapper
