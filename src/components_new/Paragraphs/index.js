import {
  Paragraph1 as P1,
  Paragraph2 as P2,
  Paragraph3 as P3,
  Paragraph4 as P4,
} from "components/Redoute/paragraphs";
import styled from '@emotion/styled'

import mq from 'common/styles/breakpoints'

const Paragraph1 = styled(P1)`
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
`

// ChapÃ´
const Paragraph2 = styled(P2)`
  font-size: 21px;
  line-height: 140%;
  font-weight: 400;
`

const PSmall = styled(P3)`
  font-size: 13px;
  line-height: 130%;
  font-weight: 400;
  ${mq('small')} {
    font-size: 16px;
    line-height: 150%;
  }
`
const PKpi = styled(P4)`
  font-size: 55px;
  line-height: 140%;
  font-weight: 400;
  ${mq('small')} {
    font-size: 21px;
    line-height: 140%;
  }
`

export { Paragraph1, Paragraph2, PSmall, PKpi }
