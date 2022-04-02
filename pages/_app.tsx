import "../styles/globals.css";
import type { AppProps } from "next/app";

import styled from "@emotion/styled";

import GlobalHeader from "../components/commons/GlobalHeader";
import SideMenu from "../components/commons/SideMenu";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalHeader />
      <Grid>
        <SideMenu />
        <Component {...pageProps} />
      </Grid>
    </div>
  );
}

export default MyApp;
