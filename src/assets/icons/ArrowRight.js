import React from 'react'

import theme from 'common/styles/theme'

const ArrowRight = ({ size, className, color }) => (
  <svg
    viewBox='0 0 19 19'
    width={size || 19}
    height={size || 19}
    fill='none'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.1308 8.37315L9.83539 0L8.41461 1.40761L15.0221 8.07696H0V10.077H15.0062L8.41789 16.6653L9.83211 18.0795L18.1276 9.78406L18.8314 9.08024L18.1308 8.37315Z'
      fill={color || theme.main}
    />
  </svg>
)

export default ArrowRight
