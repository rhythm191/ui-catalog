import { FunctionComponent, ReactNode } from "react";

/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
}

const FlatButton: FunctionComponent<Props> = ({ children, ...props }) => (
  <button css={flatButtonStyle} {...props}>
    {children}
  </button>
);

const flatButtonStyle = css`
  padding: 12px 24px;
  min-width: 120px;
  color: #fff;
  background: #1473e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.6s cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    color: #fff;
    background: #095aba;
  }
`;

export default FlatButton;
