import React from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import RelatedCaseStudy from "components/RelatedCaseStudy";
import ListOf from "components/ListOf";
import services from "pages/Services/services";
import { Paragraph1 } from "components/_ui/Paragraphs";
import { Title2Styled, Title4 } from "components/_ui/Titles";
import {
	BlockContainer,
	About,
	List1,
	List2
} from "./common";

const Title4Styled = styled(Title4)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  color: ${theme.secondaryColor};
`);

const Section = ({ serviceKey }) => {
	const service = services[serviceKey];
	const intl = useIntl();
  
	const messagesKeys = Object.keys(intl.messages);
	const serviceType = service.id;
	const concernIds = messagesKeys.filter(d => d.startsWith(`${serviceType}-concern`));
	const expertiseIds = messagesKeys.filter(d => d.startsWith(`${serviceType}-expertise`));
	return (
		<BlockContainer>
			<About>
				<Title2Styled>
					{service.label[lang]}
				</Title2Styled>
				<div>
					<Paragraph1>
						<FormattedMessage id={`${serviceType}-1`} />
					</Paragraph1>
					<Paragraph1>
						<FormattedMessage id={`${serviceType}-2`} />
					</Paragraph1>
				</div>
			</About>
			<List1>
				<Title4Styled>
          FormattedMessage: concerns-title
				</Title4Styled>
				<ListOf ids={concernIds} />
			</List1>
			<List2>
				<Title4Styled>
          FormattedMessage: expertise-title
				</Title4Styled>
				<ListOf ids={expertiseIds} />
			</List2>
			<RelatedCaseStudy slug={service.projectSlug} />
		</BlockContainer>
	);
};

export default Section;
