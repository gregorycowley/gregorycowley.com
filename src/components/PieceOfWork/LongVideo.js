import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

const LongVideo = ({ uri }) => {
  if (navigator.userAgent === 'ReactSnap') return null
  return (
    <>
      <Vimeo
        responsive
        video={uri}
      />
    </>
  )
}

export default LongVideo
