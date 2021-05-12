import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import mq from 'common/styles/breakpoints'

import grid, { maxWidth } from 'components/Layout'

const GridContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 10;
  ${grid}
  ${maxWidth}
  pointer-events: none;
  ${mq('small')} {
    grid-template-rows: 1fr 0; /* no second line for extra cols */
  }
`

const Col = styled.div`
  background: red;
  filter: grayscale(1);
  opacity: 0.2;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: all;
  line-height: 100%;
  transition: font-size 100ms ease;
  :hover {
    opacity: 0.18;
    font-weight: 500;
    font-size: 50px;
  }
  ${mq('small')} {
    background: darkblue;
    filter: none;
  }
`

const GridHelper = () => {
  const [isGrid, setGrid] = useState(false)

  // press G to toggle grid
  useEffect(() => {
    const keyPressHandler = e => {
      e.key === 'g' && setGrid(!isGrid)
    }

    document.addEventListener('keydown', keyPressHandler)
    return () => {
      document.removeEventListener('keydown', keyPressHandler)
    }
  }, [isGrid])

  return (
    isGrid && (
      <GridContainer>
        {Array(20)
          .fill()
          .map((_, i) => (
            <Col key={i}>
              <div>{i + 1}</div>
              <div>{i + 1}</div>
            </Col>
          ))}
      </GridContainer>
    )
  )
}

export default GridHelper
