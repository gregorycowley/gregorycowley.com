import React from 'react'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
 
function Download ({ className, theme, color }) {
  return (
    <svg
      viewBox='0 0 18 18'
      width='18'
      height='18'
      fill={color || theme.white}
      className={className}
    >
      <g clipPath='url(#clip0)'>
        <path
          fillRule='evenodd'
          d='M15.75 4.85L17.1 6.2 9 14.3.9 6.2l1.35-1.35 5.85 5.856V-1h1.8v11.706l5.85-5.856zM18 17.9v-1.8H0v1.8h18z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <path d='M0 0H18V18H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default withTheme(Download)
