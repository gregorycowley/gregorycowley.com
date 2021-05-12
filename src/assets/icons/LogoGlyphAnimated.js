import React from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const Eyest = keyframes`
    0% {
      transform: translate(1037.995px,156.5005px);
      animation-timing-function: cubic-bezier(0.86,0,0.07,1);
    } 
    22% {
      transform: translate(887.995px,156.5005px);
      animation-timing-function: cubic-bezier(0.86,0,0.07,1);
    }
    60% {
      transform: translate(887.995px,156.5005px);
      animation-timing-function: cubic-bezier(0.86,0,0.07,1);
    }
    76% { 
      transform: translate(339.23px,156.5005px);
    } 
    100% {
      transform: translate(339.23px,156.5005px);
    }
  `

const EyesO = keyframes`
    { 0% { opacity: 0; animation-timing-function: cubic-bezier(0.86,0,0.07,1); } 20% { opacity: 1; } 60% { opacity: 1; animation-timing-function: cubic-bezier(0.86,0,0.07,1); } 74% { opacity: 0; } 100% { opacity: 0; } }
  `
const Vt = keyframes`
    { 
      0% {
        transform: translate(779.726px,236.35px) scale(5.5,5.5) translate(-13.9452px,-15.1813px);
      } 
      60% { 
        transform: translate(779.726px,236.35px) scale(5.5,5.5) translate(-13.9452px,-15.1813px);
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      76% {
        transform: translate(230.956px,236.35px) scale(5.5,5.5) translate(-13.9452px,-15.1813px);
      }
      100% {
        transform: translate(230.956px,236.35px) scale(5.5,5.5) translate(-13.9452px,-15.1813px);
      }
    }
  `
const V2d = keyframes`
    { 
      0% {
        d: path('M7.36846,1.10526L0,1.10526L0,1.10526L7.36846,1.10526L7.36846,1.10526Z'); 
      }
      8% { 
        d: path('M7.36846,1.10526L0,1.10526L0,1.10526L7.36846,1.10526L7.36846,1.10526Z');
        animation-timing-function: cubic-bezier(0.96,0,0.02,1);
      }
      14% {
        d: path('M7.36846,1.10526L0,1.10526L14.7369,30.5791L18.4212,23.2106L7.36846,1.10526Z');
      }
      100% {
        d: path('M7.36846,1.10526L0,1.10526L14.7369,30.5791L18.4212,23.2106L7.36846,1.10526Z');
      }
    }
  `
const Traild = keyframes`
    {
      0% {
        d: path('M17.5,24.5L11.6052,21.5526L1.8686,39.7105L8.2894,42.9211Z');
      }
      12% {
        d: path('M17.5,24.5L11.6052,21.5526L1.8686,39.7105L8.2894,42.9211Z');
        animation-timing-function: cubic-bezier(0,0,0.02,1);
      }
      24% {
        d: path('M27.6314,4.78948L21.7366,1.8421L12,20L18.4208,23.2106Z');
      }
      100% {
        d: path('M27.6314,4.78948L21.7366,1.8421L12,20L18.4208,23.2106Z');
      }
    }
  `
const Balld = keyframes`
    {
      0% {
        d: path('M14.1711,27.4079C16.0023,27.4079,17.4869,25.9234,17.4869,24.0921C17.4869,22.2608,16.0023,20.7763,14.1711,20.7763C12.3398,20.7763,10.8552,22.2608,10.8552,24.0921C10.8552,25.9234,12.3398,27.4079,14.1711,27.4079Z');
      }
      12% {
        d: path('M14.1711,27.4079C16.0023,27.4079,17.4869,25.9234,17.4869,24.0921C17.4869,22.2608,16.0023,20.7763,14.1711,20.7763C12.3398,20.7763,10.8552,22.2608,10.8552,24.0921C10.8552,25.9234,12.3398,27.4079,14.1711,27.4079Z');
        animation-timing-function: cubic-bezier(0,0,0.02,1);
      }
      24% {
        d: path('M24.6842,6.63162C26.5155,6.63162,28,5.14708,28,3.31581C28,1.48454,26.5155,0,24.6842,0C22.8529,0,21.3684,1.48454,21.3684,3.31581C21.3684,5.14708,22.8529,6.63162,24.6842,6.63162Z');
      }
      100% {
        d: path('M24.6842,6.63162C26.5155,6.63162,28,5.14708,28,3.31581C28,1.48454,26.5155,0,24.6842,0C22.8529,0,21.3684,1.48454,21.3684,3.31581C21.3684,5.14708,22.8529,6.63162,24.6842,6.63162Z');
      }
    }
  `
const Datat = keyframes`
    { 
      0% {
        transform: translate(10px,157px);
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      } 
      22% {
        transform: translate(160px,157px);
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      60% {
        transform: translate(160px,157px);
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      76% {
        transform: translate(-488.77px,157px);
      }
      100% {
        transform: translate(-488.77px,157px);
      }
    }
  `
const Datao = keyframes`
    { 
      0% {
        opacity: 0;
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      20% {
        opacity: 1;
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      60% {
        opacity: 1;
        animation-timing-function: cubic-bezier(0.86,0,0.07,1);
      }
      74% {
        opacity: 0;
      } 
      100% {
        opacity: 0;
      }
    }
  `

const Svg = styled.svg`
    white-space: pre;
  `

const GEyes = styled.g`
    animation: 5s linear both ${Eyest}, 5s linear both ${EyesO};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const Gv = styled.g`
    animation: 5s linear both ${Vt};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const PathV2 = styled.path`
    animation: 5s linear both ${V2d};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const PathTrail = styled.path`
    animation: 5s linear both ${Traild};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const PathBall = styled.path`
    animation: 5s linear both ${Balld};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const GData = styled.g`
    animation: 5s linear both ${Datat}, 5s linear both ${Datao};
    animation-iteration-count: 1;
    animation-delay: 300ms;

  `

const LogoGlyph = ({ theme, isDarkTheme }) => {
  const color = isDarkTheme ? theme.white : theme.black
  const id = isDarkTheme ? 'white' : 'dark'
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
      width='200'
      height='48'
      viewBox='0 0 253 34'
    >
      <defs>
        {/* We need to declare 2 gradients because having the stop-color as a variable does not work with svg gradient */}
        <linearGradient
          id='logo_Gradient_white'
          x1='23.3387'
          y1='3.86488'
          x2='13.1813'
          y2='16.0179'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor={theme.white} />
          <stop offset='0.625431' stopColor={theme.white} stopOpacity='0.37' />
          <stop offset='1' stopColor={theme.white} stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='logo_Gradient_dark'
          x1='23.3387'
          y1='3.86488'
          x2='13.1813'
          y2='16.0179'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor={theme.black} />
          <stop offset='0.625431' stopColor={theme.black} stopOpacity='0.37' />
          <stop offset='1' stopColor={theme.black} stopOpacity='0' />
        </linearGradient>
        <clipPath id='ClipPath-2-dark'>
          <path
            id='Mask-2-dark'
            opacity='1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4208,23.2106L30,0L24.1052,-2.94738L14,14L18.4208,23.2106Z'
            fill={theme.white}
          />
        </clipPath>
        <clipPath id='ClipPath-1-dark'>
          <path
            id='Mask-dark'
            opacity='1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4208,23.2106L30,0L24.1052,-2.94738L14,14L18.4208,23.2106Z'
            fill={theme.white}
          />
        </clipPath>
        <clipPath id='ClipPath-2-white'>
          <path
            id='Mask-2-white'
            opacity='1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4208,23.2106L30,0L24.1052,-2.94738L14,14L18.4208,23.2106Z'
            fill={theme.black}
          />
        </clipPath>
        <clipPath id='ClipPath-1-white'>
          <path
            id='Mask-white'
            opacity='1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4208,23.2106L30,0L24.1052,-2.94738L14,14L18.4208,23.2106Z'
            fill={theme.black}
          />
        </clipPath>
      </defs>
      <g
        id='Dataveyes'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
        transform='translate(126.377,16.9639) scale(0.2,0.2) translate(-786.885,-239.181)'
      >
        <GEyes
          id='Eyes'
          opacity='0'
          transform='translate(1300.88,240.431) translate(-262.885,-83.9305)'
        >
          <path
            id='S'
            d='M1194.8,170.186C1230.45,172.664,1251.87,148.43,1253.64,123.286C1255.25,100.407,1241.87,79.6736,1213.79,72.0315L1194.04,66.5614C1183.85,63.8043,1179.82,57.8334,1180.36,50.1316C1180.98,41.2973,1189.58,33.473,1202.03,34.3379C1213.17,35.1119,1221.82,37.4281,1231.84,45.0396C1231.84,45.0396,1245.38,18.3545,1245.26,18.2313C1237.14,10.0441,1222.04,3.86067,1204.47,2.63938C1175.78,0.645657,1149.4,20.209,1147.26,50.563C1145.59,74.3479,1159.71,93.5399,1184.66,100.509L1204.83,106.008C1214.6,108.736,1220.3,115.051,1219.73,123.206C1219.03,133.173,1210.53,139.411,1197.46,138.502C1180.8,137.345,1171.76,131.06,1163.14,117.747L1148.63,147.222C1157.64,159.181,1172.49,168.635,1194.8,170.186Z'
            fill={color}
            opacity='0.5'
            transform='translate(-728,-2.5)'
          />
          <path
            id='E'
            fill={color}
            opacity='0.5'
            d='M1014,6L1014,166L1120,166L1120,130L1050.07,130L1050.07,103L1100,103L1100,69L1050.07,69L1050.07,42L1120,42L1120,6Z'
            transform='translate(-728,-2.5)'
          />
          <path
            id='Y'
            fill={color}
            opacity='0.5'
            d='M943,166L907,166L907,106L857,6L897,6L925.5,62L952.445,6L992.445,6L943,104.891Z'
            transform='translate(-728,-2.5)'
          />
          <path
            id='E-2'
            fill={color}
            opacity='0.5'
            d='M728,6L728,166L834,166L834,130L764.07,130L764.07,103L814,103L814,69L764.07,69L764.07,42L834,42L834,6Z'
            transform='translate(-728,-2.5)'
          />
        </GEyes>
        <Gv
          id='V'
          transform='translate(779.726,236.35) scale(5.5,5.5) translate(-13.9452,-15.1813)'
        >
          <PathV2
            id='V-2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.36846,1.10526L0,1.10526L14.7369,30.5791L18.4212,23.2106L7.36846,1.10526Z'
            fill={color}
            transform='translate(0,-0.216576)'
          />
          <PathTrail
            id='Trail'
            opacity='0.7'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M27.6314,4.78948L21.7366,1.8421L12,20L18.4208,23.2106Z'
            fill={`url(#logo_Gradient_${id})`}
            clipPath={`url(#ClipPath-2-${id})`}
            transform='translate(0,-0.216576)'
          />
          <PathBall
            id='Ball'
            d='M24.6842,6.63162C26.5155,6.63162,28,5.14708,28,3.31581C28,1.48454,26.5155,0,24.6842,0C22.8529,0,21.3684,1.48454,21.3684,3.31581C21.3684,5.14708,22.8529,6.63162,24.6842,6.63162Z'
            fill={color}
            clipPath={`url(#ClipPath-1-${id})`}
            transform='translate(0,-0.216576)'
          />
        </Gv>
        <GData
          id='Data'
          opacity='0'
          transform='translate(297,238.5) translate(-287,-81.5)'
        >
          <path
            id='A'
            d='M491,81L472,119L510,119L491,81ZM452.5,166L412,166L492.5,3L574,166L533.5,166L525,149L461,149L452.5,166Z'
            fill={color}
            opacity='1'
            transform='translate(0,-3)'
          />
          <path
            id='T'
            fill={color}
            d='M376,42L376,166L340,166L340,42L292,42L292,6L424,6L424,42Z'
            opacity='1'
            transform='translate(0,-3)'
          />
          <path
            id='A-2'
            d='M223,81L204,119L242,119L223,81ZM182.5,166L142,166L222.5,3L304,166L263.5,166L255,149L191,149L182.5,166Z'
            fill={color}
            opacity='1'
            transform='translate(0,-3)'
          />
          <path
            id='D'
            d='M53.9285,165.966L0,165.966L0,6L53.9285,6C104.497,6,139.5,40.4811,139.5,85.5C139.5,130.976,104.497,165.966,53.9285,165.966ZM102.429,86.4398L102.429,85.9828C102.429,57.646,82.9622,38,54,38L36,38L36,134L54,134C82.9622,134,102.429,114.777,102.429,86.4398Z'
            fill={color}
            opacity='1'
            transform='translate(0,-3)'
          />
        </GData>
      </g>
    </Svg>
  )
}

export default withTheme(LogoGlyph)
