import React from "react";
import { useParams } from "react-router-dom";
import ListTable, { TitleLeft, ListContainerRight } from "components/ListTable";
import talks from "common/data/talks";


const headers = [
	{ id: "label", isHighlighted: true },
	{ id: "place", isHighlighted: false },
	{ id: "date", dateFormat: "MMM yyyy", isHighlighted: false }
];


const Talks = ({ isDarkTheme }) => {
  
	const filteredTalks = talks.filter((d) => d.label[lang]);
	if (!filteredTalks.length) return null;
	return (
		<>
			<TitleLeft>
        FormattedMessage: last-talks-title
			</TitleLeft>
			<ListContainerRight>
				<ListTable
					list={filteredTalks}
					headers={headers}
					gridTemplateColumns='6fr 4fr 4fr'
					isDarkTheme={isDarkTheme}
				/>
			</ListContainerRight>
		</>
	);
};

export default Talks;
export { talks };
