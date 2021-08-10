import React from "react";

import ListTable, { TitleLeft, ListContainerRight } from "components/ListTable";

import exhibitions from "common/data/exhibitions";
const headers = [
	{ id: "label", isHighlighted: true },
	{ id: "place", isHighlighted: false },
	{ id: "year", isHighlighted: false }
];


const Exhibitions = ({ isDarkTheme }) => {
	if (!exhibitions.length) return null;
	return (
		<>
			<TitleLeft>
        FormattedMessage: exhibitions-title
			</TitleLeft>
			<ListContainerRight id='award'>
				<ListTable
					list={exhibitions}
					headers={headers}
					gridTemplateColumns='6fr 4fr 4fr'
					isDarkTheme={isDarkTheme}
				/>
			</ListContainerRight>
		</>
	);
};

export default Exhibitions;
