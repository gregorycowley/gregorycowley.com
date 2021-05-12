import { find, map } from 'lodash'
import { useParams, useLocation } from 'react-router-dom'

import ROUTES from 'common/routes'
import LAYOUTS from 'common/configs/layout'
import LANG from 'common/wording/lang'

const switchLangInPath = (path, oppositeLang) => {
  const regexMatchLang = /^\/../
  const newPath = path.replace(regexMatchLang, `/${oppositeLang}`)
  return newPath
}

const useLinksList = () => {
  const { lang } = useParams()
  const location = useLocation()
  const currentLang = find(LANG, { SLUG: lang })
  const oppositeLang = lang === LANG.FR.SLUG ? LANG.EN : LANG.FR
  const pathOppositeLang = switchLangInPath(
    location.pathname,
    oppositeLang.SLUG
  )

  const formatLinks = links => {
    return links.map(route => {
      const label = route.LABEL[currentLang.SHORT]
      return {
        to: route.IS_EXTERNAL
          ? route.SLUG_INDEX[currentLang.SHORT] || route.SLUG_INDEX
          : `/${lang}/${route.SLUG_INDEX}`,
        label: label,
        title: label,
        isExternal: route.IS_EXTERNAL,
        isExact: route.IS_EXACT
      }
    })
  }

  const getRoutesForCol = (ROUTES, colNumber) => {
    return formatLinks(
      Object.keys(ROUTES)
        .filter(k => LAYOUTS[k] && LAYOUTS[k].menu.col === colNumber)
        .sort((a, b) => LAYOUTS[a].menu.order - LAYOUTS[b].menu.order)
        .map(k => ROUTES[k])
    )
  }

  const langLinks = map(LANG, l => {
    return {
      title: l.LABEL,
      label: l.SHORT,
      to: lang === l.SLUG ? location.pathname : pathOppositeLang,
      isLang: true
    }
  })
  return [getRoutesForCol(ROUTES, 1), getRoutesForCol(ROUTES, 2), langLinks]
}

export default useLinksList
