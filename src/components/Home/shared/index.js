import styled from "@emotion/styled";

import { Title4 } from "components/_ui/Titles";

const TitleModule = styled(Title4)`
  grid-column: 2 / -2;
  color: ${({ theme }) => theme.secondaryColor};
`;

export {
	TitleModule
};
