import React from 'react'
import BezierEasing from 'bezier-easing'
import { useSpring, animated } from 'react-spring'

function Play ({ isHovered }) {
  const config = {
    easing: BezierEasing(0.96, 0, 0.02, 1)
  }
  const styles = useSpring({
    config: config,
    transform: isHovered
      ? 'scale(1.3)'
      : 'scale(1)',
    opacity: isHovered
      ? 1
      : 0.6
  })
  return (
    <animated.svg
      width='40'
      height='42'
      viewBox='0 0 40 42'
      fill='none'
      style={styles}
    >
      <path d='M0.141602 41.7542L39.8584 21.3284L0.141602 0.902649V41.7542Z' fill='white' />
    </animated.svg>
  )
}

export default Play
