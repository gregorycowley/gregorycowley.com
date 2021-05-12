import { useWindowSize } from 'react-recipes'

import { breakpoints } from 'common/styles/breakpoints'

/**
 * A hook that will return true when the size of the window
 * is smaller than the small media query
 */
const useIsSmall = () => {
  const { width } = useWindowSize()
  return width <= breakpoints.small
}

export default useIsSmall
