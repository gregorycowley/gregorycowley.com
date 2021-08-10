import React from "react";
import Metas from "components/Metas";

import layout from "common/configs/layout";
import PageHeader from "components/PageHeader";

const Page404 = () => {
	return (
		<>
			<Metas wording="page-404" />
			<PageHeader
				isDarkTheme={layout.NOT_FOUND.isHeaderDark}
				backTo={"/"}
				backToLabel="404-link"
				titleMain="404-title"
				chapo="404-content"
				noBorder
			/>
		</>
	);
};

export default Page404;
