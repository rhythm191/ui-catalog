import Link from "next/link";
import breakpoints from "../../styles/breakpoints";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const menuStyle = css`
  display: none;

  @media (min-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    width: 150px;
    height: 100%;
    padding: 24px;
    border-right: 1px solid #969696;
    text-transform: capitalize;
  }
`;

const SideMenu = () => (
  <div css={menuStyle}>
    <Link href="button">
      <a>button</a>
    </Link>
  </div>
);

export default SideMenu;
