import React from 'react'

import theme from 'common/styles/theme'

const ArrowLeft = ({ size, color, className }) => (
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
      d='M0.700531 8.37315L8.99598 0L10.4168 1.40761L3.80931 8.07696H18.8314V10.077H3.82514L10.4135 16.6653L8.99927 18.0795L0.703819 9.78406L0 9.08024L0.700531 8.37315Z'
      fill={color || theme.main}
    />
  </svg>
)

export default ArrowLeft
