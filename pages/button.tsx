import type { NextPage } from "next";
import Head from "next/head";
import Showcase from "../components/commons/Showcase";
import breakpoints from "../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const Button: NextPage = () => {
  return (
    <div css={pageStyle}>
      <Head>
        <title>Button</title>
        <meta name="description" content="button catalog" />
      </Head>

      <main>
        <h1>Button</h1>

        <div css={showcaseListStyle}>
          <Showcase title="classic" path="components/button/classic.tsx">
            <button>button</button>
          </Showcase>
          <Showcase title="classic" path="components/button/classic.tsx">
            <button>button</button>
          </Showcase>
          <Showcase title="classic" path="components/button/classic.tsx">
            <button>button</button>
          </Showcase>
        </div>
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
`;

const showcaseListStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 170px);
  gap: 16px;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(3, 180px);
    gap: 24px;
  }

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(3, 240px);
    gap: 24px;
  }
`;

export default Button;
