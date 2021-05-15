import styled from '@emotion/styled'

import mq from 'common/styles/breakpoints'

const Layout3cols = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 8fr 10fr 2fr;
  grid-column-gap: 2px;
  ${mq('small')} {
    grid-template-columns: 1fr 10fr 1fr;
  }
`

const LeftCol = styled.div`
  grid-column: 1;
  ${mq('small')} {
    grid-column: 2;
  }
`
const RightCol = styled.div`
  grid-column: 2;
  ${mq('small')} {
    grid-column: 2;
  }
`

// To be called as child of the 20 cols grid
const LeftColWithGutter = styled.div`
  grid-column: 2 / 8;
  ${mq('small')} {
    grid-column: 2 / -2;
  }
`

// To be called as child of the 20 cols grid
const RightColWithGutter = styled.div`
  grid-column: 9 / -2;
  ${mq('small')} {
    grid-column: 2 / -2;
  }
`

export {
  Layout3cols,
  LeftCol,
  RightCol,
  LeftColWithGutter,
  RightColWithGutter
}
