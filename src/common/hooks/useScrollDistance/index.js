import { useState, useEffect } from 'react'
import { throttle } from 'lodash'

/**
 * This hook tells you if the scroll from the body is greater than a distance
 * @param {number} distance The scroll distance from the top
 * @return {boolean} If the distance from top has being passed
 */
const useScrollDistance = (distance = 100) => {
  const [isDistancePassed, setDistancePassed] = useState(false)

  useEffect(
    () => {
      const handleScroll = throttle(() => {
        if (window.scrollY < distance) {
          setDistancePassed(false)
        } else {
          setDistancePassed(true)
        }
      }, 100)

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    },
    [distance]
  )

  return isDistancePassed
}

export default useScrollDistance
