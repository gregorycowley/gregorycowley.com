import React from 'react'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const ArrowLeftWithDisc = ({ className, theme }) => {
  return (
    <svg
      fill={theme.secondary}
      viewBox='0 0 30 30'
      width='30'
      height='30'
      className={className}
    >
      <path
        d='M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM8.48067 14.6663L14.2205 8.75872L14.9377 9.45557L10.0222 14.5147H20.8929V15.5147H10.0264L14.9368 20.5435L14.2213 21.2422L8.48155 15.3641C8.2922 15.1701 8.29182 14.8607 8.48067 14.6663Z'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default withTheme(ArrowLeftWithDisc)
