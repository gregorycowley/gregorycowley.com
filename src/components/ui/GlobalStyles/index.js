import React from 'react'
import { Global, css } from '@emotion/react'
import { withTheme } from "@emotion/react";

const GlobalStyles = withTheme(({ theme, isBodyDark, disableOverflow }) => (
  <Global
    styles={css`
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${isBodyDark ? theme.white : theme.black};
      }
      ::-webkit-scrollbar-track {
        background-color: ${isBodyDark ? theme.black : theme.white};
      }

      @font-face {
        font-family: "Apercu";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: url("/fonts/apercu-regular.woff2") format("woff2"),
          url("/fonts/apercu-regular.woff") format("woff");
      }

      @font-face {
        font-family: "Apercu";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: url("/fonts/apercu-medium.woff2") format("woff2"),
          url("/fonts/apercu-medium.woff") format("woff");
      }

      body,
      html,
      #__next {
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 16px;
        line-height: 150%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      #__next {
        overflow-x: ${disableOverflow
          ? "unset"
          : "hidden"}; /* carousels. Disabled on page Services beacause sticky panel won't work */
      }

      body {
        font-family: "Apercu", sans-serif;
        background-color: ${isBodyDark ? theme.black : theme.white};
        color: ${isBodyDark ? theme.white : theme.main};

        /* when modal is open, we prevent the user to scroll but we want to keep the scrollbar. See Header/index.js */
        &.no-scroll {
          position: fixed;
          overflow-y: scroll;
          width: 100%;
          ::-webkit-scrollbar-track {
            background-color: ${theme.black};
          }
        }
      }

      input,
      button {
        font-family: "Apercu";
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
));

export default GlobalStyles
