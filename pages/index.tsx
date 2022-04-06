import type { NextPage } from "next";
import Head from "next/head";
import breakpoints from "../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <div css={pageStyle}>
      <Head>
        <title>Rhyztech UI Catalog</title>
        <meta name="description" content="ui catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Rhyztech UI Catalog</h1>
      </main>
    </div>
  );
};

const pageStyle = css`
  padding: 4px;
  width: 100%;

  @media (min-width: ${breakpoints.sm}px) {
    padding: 24px;
  }

  main {
    min-height: calc(100vh - 90px);
  }

  @media (min-width: ${breakpoints.sm}px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  h1 {
    margin: 24px 0 24px;
    font-size: 24px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}px) {
    h1 {
      margin: 0 0 24px;
      text-align: left;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    h1 {
      margin: 24px 0;
      text-align: center;
    }
  }
`;

export default Home;
