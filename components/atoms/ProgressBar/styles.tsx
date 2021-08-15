//can remove this expect error once we can correctly extend styled components
//@ts-nocheck
import { createGlobalStyle, css } from "styled-components";

export const ProgressStyles = createGlobalStyle`
${({ theme }) => css`
  #nprogress {
    .bar {
      height: 5px;
      background: ${theme.colors.secondary} !important;
    }
    .peg {
      box-shadow: none !important;
    }
  }
`}
`;
