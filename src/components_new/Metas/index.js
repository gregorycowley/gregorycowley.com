import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'

const HelmetWithWording = ({ wording, values }) => {
  const intl = useIntl()
  const title = intl.formatMessage({ id: wording + '-title' }, values)
  const description = intl.formatMessage({ id: wording + '-description' }, values)

  const imgPath = 'https://dataveyes.com/img.social.jpg'

  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imgPath} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@dataveyes' />
      <meta name='twitter:image' content={imgPath} />
    </Helmet>
  )
}

export default HelmetWithWording
