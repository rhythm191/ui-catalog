import { FunctionComponent, ReactNode } from "react";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
}

const ClassicButton: FunctionComponent<Props> = ({ children, ...props }) => (
  <button css={classicStyle} {...props}>
    {children}
  </button>
);

const classicStyle = css`
  padding: 8px 16px;
  min-width: 120px;
  cursor: pointer;
`;

export default ClassicButton;
