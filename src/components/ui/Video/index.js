import React from 'react'

const Video = (props, ref) => {
  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: `
       <video
         ${props.loop && 'loop'}
         ${props.muted && 'muted'}
         ${props.autoPlay && 'autoplay'}
         ${props.playsInline && 'playsinline'}
         src="${props.src}"
         style="width: 100%;"
       />,
     `
      }}
    />
  )
}

export default React.forwardRef(Video)
