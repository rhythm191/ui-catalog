import Link from "next/link";
import styled from "@emotion/styled";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 24px;
  border-bottom: 1px solid #969696;
`;

const GlobalTitle = styled.div`
  font-size: 32px;
  line-height: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`;

const GlobalHeader = () => (
  <Header>
    <GlobalTitle>
      <Link href="/">
        <a>Rhyztech UI Catalog</a>
      </Link>
    </GlobalTitle>
    <SocialLinks>
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
    </SocialLinks>
  </Header>
);

export default GlobalHeader;
