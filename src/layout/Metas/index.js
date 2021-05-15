import React from 'react'
import { Helmet } from 'react-helmet-async'

const HelmetWithWording = ({ wording, values }) => {
  console.log(wording, values);
  // wording = "main"
  // values = undefined

  const title = ""; //intl.formatMessage({ id: wording + '-title' }, values)
  const description = ""; //intl.formatMessage({ id: wording + '-description' }, values)
  const imgPath = "://img.social.jpg";

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgPath} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@gregorycowley" />
      <meta name="twitter:image" content={imgPath} />
    </Helmet>
  );
};

export default HelmetWithWording
