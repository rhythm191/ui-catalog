import Link from "next/link";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";

const GlobalHeader = () => (
  <header css={headerStyle}>
    <div css={globalTitleStyle}>
      <Link href="/">
        <a>Rhyztech UI Catalog</a>
      </Link>
    </div>
    <div css={socialLinkStyle}>
      <a
        href="https://twitter.com/rhythm191"
        rel="noopener noreferrer"
        target="_blank"
        title="twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://github.com/rhythm191/ui-catalog"
        rel="noopener noreferrer"
        target="_blank"
        title="github"
      >
        <FaGithub />
      </a>
    </div>
  </header>
);

const headerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  width: 100%;
  padding: 0;
  border-bottom: 1px solid #969696;

  @media (min-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  }
`;

const globalTitleStyle = css`
  font-size: 20px;
  line-height: 1;
  margin: 16px 0 16px;

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 24px;
    margin: 0;
  }
`;

const socialLinkStyle = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`;

export default GlobalHeader;
