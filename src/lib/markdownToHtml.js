import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import unified from "unified";
import markdown from "remark-parse";
import slug from "remark-slug";
import toc from "remark-toc";
import images from "remark-images";
import sectionize from "remark-sectionize";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

import LongVideo from "components/PieceOfWork/LongVideo";
import GIFVideo from "components/PieceOfWork/GIFVideo";
import Link from "components/_ui/Links";

import { Paragraph2, Paragraph1, PSmall } from "components/_ui/Paragraphs";
import mq from "common/styles/breakpoints";
import { Title1, Title3, Title4 } from "components/_ui/Titles";

const Chapo = styled(Paragraph2)`
	padding-top: ${({ theme, marginBottom }) =>
		marginBottom ? theme[marginBottom] : theme.spacingXL}px;
	margin-bottom: ${({ theme }) => theme.spacingXL}px;
	${mq("small")} {
		padding-top: ${({ theme, marginBottom }) =>
			marginBottom ? theme[marginBottom] : theme.spacingL}px;
		margin-bottom: ${({ theme }) => theme.spacingL}px;
	}
`;

const SectionTitle = styled(Title3)(
	({ theme, marginBottom }) => css`
		color: ${theme.secondaryColor};
		margin-bottom: ${marginBottom ? theme[marginBottom] : theme.spacingS}px;
		margin-top: ${theme.spacingXL}px;
		${mq("small")} {
			margin-top: ${theme.spacingL}px;
		}	`
);

const Section = styled.div`
	margin-bottom: ${({ theme, marginBottom }) =>
		marginBottom ? theme[marginBottom] : theme.spacingM}px;
`;

const SectionImage = styled.div`
	margin-bottom: ${({ theme, marginBottom }) =>
		marginBottom ? theme[marginBottom] : theme.spacingXS}px;
`;

const Img = styled.img(
	({ theme, hasBorder = false }) => css`
		width: 100%;
		border: ${hasBorder ? `1px solid ${theme.separatorColor}` : "none"};
	`
);

const ImgLegend = styled(PSmall)(
	({ theme }) => css`
		color: ${theme.secondaryColor};
		margin-top: ${theme.spacingS}px;
	`
);

const Quote = styled(Title3)(
	({ theme, marginBottom }) => css`
		margin-bottom: ${marginBottom ? theme[marginBottom] : theme.spacingM}px;
	`
);

const QuoteAuthor = styled(Paragraph1)(
	({ theme }) => css`
		color: ${theme.secondaryColor};
	`
);

export default async function markdownToHtml(markdownContent) {
	// const result = await remark().use(html).process(markdown);

	console.log(markdownContent);


	const processor = unified()
		.use(markdown)
		.use(sectionize)
		.use(slug)
		.use(toc)
		.use(remark2rehype)
		.use(rehype2react, {
			createElement: React.createElement,
			components: {
				a: Link,
				p: Paragraph1,
				blockquote: Chapo,
				h3: SectionTitle,
				h4: SectionTitle,
				image: SectionImage,
			},
		});

	const result =  processor.processSync(markdownContent).result;
	// console.log(result.props.children);
		
	return await result;
}
