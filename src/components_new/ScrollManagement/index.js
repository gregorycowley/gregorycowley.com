import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import scrollToElement from 'scroll-to-element'
import { headerHeight, headerHeightMobile } from 'components/Header/constants'
import useIsSmall from 'common/hooks/useIsSmall'

/**
 * Component that will force a scroll top when pathname changes
 * or scroll to an anchor if needed
 * https://www.npmjs.com/package/scroll-to-element#example
 */
export default function ScrollManagement () {
  const { pathname, hash } = useLocation()
  const isMobile = useIsSmall()
  useEffect(
    () => {
      if (!hash) {
        window.scrollTo(0, 0)
      } else {
        scrollToElement(hash, {
          offset: isMobile ? -headerHeightMobile : -headerHeight // scrolls to just after the Header
        })
      }
    },
    [pathname, hash, isMobile]
  )

  return null
}
