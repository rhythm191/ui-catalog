/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";

import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import breakpoints from "../styles/breakpoints";

import GlobalHeader from "../components/commons/GlobalHeader";
import SideMenu from "../components/commons/SideMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />

      <div css={girdStyle}>
        <div className="header-container">
          <GlobalHeader />
        </div>
        <SideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}

const girdStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .header-container {
    width: 100%;
  }

  @media (min-width: ${breakpoints.sm}px) {
    display: grid;
    grid-template-columns: 150px 1fr;

    .header-container {
      grid-column: 1 / 3;
    }
  }
`;

export default MyApp;
