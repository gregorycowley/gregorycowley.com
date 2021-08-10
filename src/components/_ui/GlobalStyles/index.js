import React from "react";
import { Global, css } from "@emotion/react";
import { withTheme } from "@emotion/react";


const GlobalStyles = withTheme(({ theme, isBodyDark, disableOverflow }) => (
	<Global
		styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Condensed:ital,wght@1,300&family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700;900&display=swap");

      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${isBodyDark ? theme.white : theme.black};
      }
      ::-webkit-scrollbar-track {
        background-color: ${isBodyDark ? theme.black : theme.white};
      }

      /* font-family: "Roboto", monospace; */
      /* font-family: "Open Sans", sans-serif; */
      /* font-family: "Roboto", sans-serif; */
      /* font-family: "Roboto Condensed", sans-serif; */
      /* font-family: "Roboto Mono", monospace; */

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
        font-family: ${theme.fontTitle};
        background-color: ${theme.body.background};
        color: ${theme.body.foreground};

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
        font-family: ${theme.fontTitle};
      }

      * {
        box-sizing: border-box;
      }
    `}
	/>
));

export default GlobalStyles;
