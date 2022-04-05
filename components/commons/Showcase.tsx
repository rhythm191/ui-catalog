import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

interface Props {
  title: string;
  path: string;
  children: ReactNode;
}

const Showcase: FunctionComponent<Props> = ({ title, path, children }) => (
  <div css={showcaseStyle}>
    <div css={showcaseItemStyle}>{children}</div>
    <div css={showcaseDescriptionStyle}>
      <p>{title}</p>
      <Link
        href={`https://github.com/rhythm191/ui-catalog/blob/develop/${path}`}
      >
        <a rel="noopener noreferrer" target="_blank">
          <FaLink />
        </a>
      </Link>
    </div>
  </div>
);

const showcaseStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const showcaseItemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background-color: #f0f0f0;

  @media (min-width: ${breakpoints.md}px) {
    min-height: 200px;
  }
`;

const showcaseDescriptionStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;

  > p {
    margin: 0;
    font-size: 16px;
  }
`;

export default Showcase;
