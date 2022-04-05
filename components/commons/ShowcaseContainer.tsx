import { FunctionComponent, ReactNode } from "react";
import breakpoints from "../../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

interface Props {
  children: ReactNode;
}

const ShowcaseContainer: FunctionComponent<Props> = ({ children }) => (
  <div css={showcaseListStyle}>{children}</div>
);

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

export default ShowcaseContainer;
