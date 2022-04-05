/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Futura, -apple-system, sans-serif;
    line-height: 1.5;
  }

  a {
    color: #4e4e4e;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #b4b4b4;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
