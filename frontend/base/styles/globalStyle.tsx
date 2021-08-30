import { createGlobalStyle } from "styled-components";

import { COLOR, FONT_FAMILY, FONT_SIZE } from "base/styles/helpers";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family:  ${FONT_FAMILY.poppins};
    font-size: ${FONT_SIZE.default};
  }

  body {
    background-color: ${COLOR.gray.lighter};
  }
`;
