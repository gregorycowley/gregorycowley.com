import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

import mq from 'common/styles/breakpoints'

const rightGrid = `
  grid-column: 9 / -1;
  ${mq('small')} {
    grid-column: 2 / -2;
  }
`
const imageRatio = 1.8

const Container = styled.div`
  ${rightGrid}
  cursor: col-resize;
  height: ${({ size }) => size / imageRatio}px;
  user-select: none;
  touch-action: pan-y;
  position: relative;
`

const Slide = styled.div`
  position: absolue;
  transform: translate3d(${({ x }) => x}px, 0, 0);
`

export default function (props) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef()
  const dragging = useRef(false)
  const displacementTarget = useRef(0)
  const displacementCurrent = useRef(0)
  const [displacement, setDisplacement] = useState(0)

  useEffect(() => {
    let touchCurrent = 0
    const node = ref.current

    const setDisplacementTarget = (value) => {
      const nodeWidth = node.getBoundingClientRect().width

      if (displacementTarget.current + value > 0) {
        displacementTarget.current = 0
      } else if (
        (displacementTarget.current + value) <
        -(((props.itemsLength) * props.size) - nodeWidth)
      ) {
        displacementTarget.current = -(((props.itemsLength) * props.size) - nodeWidth) - 1
      } else {
        displacementTarget.current += value
      }
    }

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        setDisplacementTarget(-e.deltaX)
      }
    }

    const onDrag = (e) => {
      if (dragging.current) {
        if (e.changedTouches) {
          setDisplacementTarget((e.changedTouches[0].clientX - touchCurrent) * 2)
          touchCurrent = e.changedTouches[0].clientX
        } else {
          setDisplacementTarget((e.clientX - touchCurrent) * 1.5)
          touchCurrent = e.clientX
        }
      }
    }

    const onDragEnd = () => {
      dragging.current = false
      node.removeEventListener('mousemove', onDrag, false)
      node.removeEventListener('touchmove', onDrag, false)
    }

    const onDragStart = (e) => {
      dragging.current = true
      touchCurrent = e.clientX
      node.addEventListener('mousemove', onDrag, false)
      window.addEventListener('mouseup', onDragEnd, false)
    }

    const onTouchstart = (e) => {
      dragging.current = true
      touchCurrent = e.changedTouches[0].clientX
      window.addEventListener('touchend', onDragEnd, false)
      node.addEventListener('touchmove', onDrag, false)
    }

    if (node) {
      node.addEventListener('wheel', onWheel, false)
      node.addEventListener('mousedown', onDragStart, false)
      node.addEventListener('touchstart', onTouchstart, false)
    }

    return () => {
      if (node) {
        node.removeEventListener('wheel', onWheel, false)
        node.removeEventListener('mousedown', onDragStart, false)
        node.removeEventListener('touchstart', onTouchstart, false)
        node.removeEventListener('mousemove', onDrag, false)
        node.removeEventListener('touchmove', onDrag, false)
      }
      window.removeEventListener('mouseup', onDragEnd, false)
      window.removeEventListener('touchend', onDragEnd, false)
    }
  }, [hovered, props.size, props.itemsLength])

  useEffect(() => {
    let raf
    let running = true

    const update = () => {
      const newD = displacementCurrent.current + (displacementTarget.current - displacementCurrent.current) * 0.15
      if (Math.abs(displacementCurrent.current - newD) >= 1) {
        displacementCurrent.current = newD
        setDisplacement(displacementCurrent.current)
      }
      if (running) window.requestAnimationFrame(update)
    }

    update()

    return () => {
      running = false
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Container
      ref={ref}
      size={props.size}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slide x={displacement}>
        {props.children}
      </Slide>
    </Container>
  )
}
