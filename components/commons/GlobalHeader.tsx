import Link from "next/link";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 24px;
  border-bottom: 1px solid #969696;
`;

const globalTitleStyle = css`
  font-size: 32px;
  line-height: 1;
`;

const socialLinkStyle = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`;

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

export default GlobalHeader;
