/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";

import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";

import GlobalHeader from "../components/commons/GlobalHeader";
import SideMenu from "../components/commons/SideMenu";

const girdStyle = css`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />

      <div css={girdStyle}>
        <div
          css={css`
            grid-column: 1 / 3;
          `}
        >
          <GlobalHeader />
        </div>
        <SideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
