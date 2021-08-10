import ROUTES from "common/routes";
import LAYOUTS from "common/configs/layout";

const useLinksList = () => {

	const formatLinks = (links) => {
		return links.map((route) => {
			const label = route.LABEL;
			return {
				to: route.IS_EXTERNAL
					? route.SLUG_INDEX
					: `/${route.SLUG_INDEX}`,
				label: label,
				title: label,
				isExternal: route.IS_EXTERNAL,
				isExact: route.IS_EXACT,
			};
		});
	};

	const getRoutesForCol = (ROUTES, colNumber) => {
		return formatLinks(
			Object.keys(ROUTES)
				.filter((k) => LAYOUTS[k] && LAYOUTS[k].menu.col === colNumber)
				.sort((a, b) => LAYOUTS[a].menu.order - LAYOUTS[b].menu.order)
				.map((k) => ROUTES[k])
		);
	};

	return [getRoutesForCol(ROUTES, 1), getRoutesForCol(ROUTES, 2)];
};

export default useLinksList;
