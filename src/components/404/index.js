import React from 'react'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import Metas from 'components/Metas'

import layout from 'common/configs/layout'
import PageHeader from 'components/PageHeader'

const Page404 = () => {
  const { lang } = useParams()
  const { formatMessage } = useIntl()

  return (
    <>
      <Metas wording='page-404' />
      <PageHeader
        isDarkTheme={layout.NOT_FOUND.isHeaderDark}
        backTo={`/${lang}`}
        backToLabel={formatMessage({ id: '404-link' })}
        titleMain={formatMessage({ id: '404-title' })}
        chapo={formatMessage({ id: '404-content' })}
        noBorder
      />
    </>
  )
}

export default Page404
