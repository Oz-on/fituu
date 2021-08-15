import styled from "styled-components";
import Link from "next/link";
import Logo from "../../Logo";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="links">
        <Link href={"/"} passHref>
          <Logo />
        </Link>
        <Link href="/about-us">
          <a className="link">O NAS</a>
        </Link>
        <Link href="/kontakt">
          <a className="link">KONTAKT</a>
        </Link>
        <Link href="polityka-prywatnosci">
          <a className="link">POLITYKA PRYWATNOSCI</a>
        </Link>
      </div>
      <div className="socials">
        <a href="facebook.com">
          <Icon as={AiFillFacebook} />
        </a>

        <a href="facebook.com">
          <Icon as={AiFillInstagram} />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 25px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 9px rgb(0 0 0 / 21%);
  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontPrimary};
    margin-left: 25px;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
    transition: all 0.2s ease;
  }
  .link:hover {
    text-decoration: underline;
  }
`;
const Icon = styled.i`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-left: 10px;
  transition: all 0.4s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.rose};
  }
`;
