import type { NextPage } from "next";
import Head from "next/head";
import ShowcaseContainer from "../components/commons/ShowcaseContainer";
import Showcase from "../components/commons/Showcase";
import breakpoints from "../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import ClassicButton from "../components/button/ClassicButton";
import FlatButton from "../components/button/FlatButton";

const Button: NextPage = () => {
  return (
    <div css={pageStyle}>
      <Head>
        <title>Button</title>
        <meta name="description" content="button catalog" />
      </Head>

      <main>
        <h1>Button</h1>

        <ShowcaseContainer>
          <Showcase title="classic" path="components/button/classic.tsx">
            <ClassicButton>button</ClassicButton>
          </Showcase>
          <Showcase title="classic" path="components/button/FlatButton.tsx">
            <FlatButton>FlatButton</FlatButton>
          </Showcase>
          <Showcase title="classic" path="components/button/classic.tsx">
            <button>button</button>
          </Showcase>
        </ShowcaseContainer>
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

export default Button;
