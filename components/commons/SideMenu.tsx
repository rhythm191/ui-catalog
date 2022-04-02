import Link from "next/link";
import styled from "@emotion/styled";

const Menu = styled.div`
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
`;

const SideMenu = () => (
  <Menu>
    <Link href="button">
      <a>button</a>
    </Link>
  </Menu>
);

export default SideMenu;
