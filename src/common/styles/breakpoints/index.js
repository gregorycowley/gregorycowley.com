const breakpoints = {
  medium: 1200,
  small: 768,
  extraSmall: 320
}

// mq: media query
const mq = breakpointName => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (breakpointName === name) {
      return [...acc, `@media (max-width: ${size}px)`]
    }
    return acc
  }, [])

  return result
}

export default mq
export { breakpoints }
