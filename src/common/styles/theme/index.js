// colors
const black = '#050505'
const blackOpacity = 'rgba(0, 0, 0, 0.05)'
const blackHalfOpacity = 'rgba(0, 0, 0, 0.5)'
const white = '#ffffff'
const whiteLight = 'rgba(255, 255, 255, 0.05)'
const main = '#3D3D3D'
const secondary = '#878787'
const separator = '#DDDDDD'
const separatorLight = 'rgba(221, 221, 221, 0.2)'
const lightGrey = '#F5F5F5'
const blue = '#4d90fe'
const green = '#103537'
const tonic = '#2FA36B'

// Opacity
const opacity = 0.5

export default {
  // colors
  black,
  green,
  tonic,
  blackOpacity,
  blackHalfOpacity,
  white,
  whiteLight,
  lightGrey,
  main,
  secondary,
  separator,
  separatorLight,
  bgHome: 'linear-gradient(180deg, #000826 0%, #00172C 100%)',

  // Opacity
  opacity,

  // vertical spacings
  spacingXS: 10,
  spacingS: 20,
  spacingM: 40,
  spacingL: 80,
  spacingXL: 140,

  // elements
  focus: {
    outlineColor: blue,
    outlineStyle: 'auto',
    outlineWidth: '5px'
  },
  titles: {},
  paragraphs: {},
  labels: {},
  links: {
    color: main
  },
  buttonLabel: {
    color: main,
    background: white,
    colorDarkTheme: white,
    backgroundDarkTheme: main,
    hover: {
      color: main,
      background: secondary
    },
    active: {
      color: main,
      background: secondary
    }
  },
  scrollbar: {
    thumb: secondary,
    track: main
  }
}
