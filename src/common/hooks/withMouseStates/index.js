import React, { useState } from 'react'

/**
 * HOC for Icon (add isHover and isDisabled props)
 * Example :
 const Icon = withMouseStates((props) => {
  const color = props.isActive ? '#FFF' : '#000'
  return (
    <svg width={17} height={17} viewBox='0 0 17 17'>
      <path fill={color} ...>
    </svg>
  )
})
*/
const withMouseStates = (WrappedComponent) => {
  const StateComponent = (props) => {
    const [isMouseHover, setHovered] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const isDisabled = !!props.isDisabled
    const isActive = !isDisabled && (isMouseDown || props.isMouseDown)
    const isHovered = !isDisabled && (isMouseHover || props.isHovered)
    // By default a span tag is created around your component
    // You can inject an other component if needed
    const WrapperElem = props.wrapper || 'span'
    return (
      <WrapperElem
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          setIsMouseDown(false)
        }}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {
          <WrappedComponent
            {...props}
            isActive={isActive}
            isHovered={isHovered}
            isDisabled={isDisabled}
          />
        }
      </WrapperElem>
    )
  }

  return StateComponent
}

export {
  withMouseStates
}
