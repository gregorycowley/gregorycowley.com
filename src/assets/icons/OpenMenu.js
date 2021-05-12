import React from 'react'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const Menu = () => {
  return (
    <>
      <rect y='14' width='18' height='2' fill='white' />
      <rect y='8' width='9' height='2' fill='white' />
      <rect y='2' width='18' height='2' fill='white' />
    </>
  )
}

const Close = withTheme(({ theme }) => {
  return (
    <path
      fill={theme.white}
      d='M8.667 7.496L2.933 1.714 1.716 2.921 7.44 8.693l-5.726 5.803 1.22 1.204 5.733-5.81L14.4 15.7l1.22-1.204-5.725-5.803 5.724-5.772-1.217-1.207-5.735 5.782z'
    />
  )
})

const OpenMenu = ({ isModalOpen, className }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      className={className}
      fill='none'
    >
      {isModalOpen ? <Close /> : <Menu />}
    </svg>
  )
}

export default OpenMenu
