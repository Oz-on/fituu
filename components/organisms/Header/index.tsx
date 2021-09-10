/**
 * Component placed at the top of the page with 
 * authentication buttons, logo and navigation
 */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";


type HeaderProps = {
  session: Object | null;
  handleLogin: Function;
  handleLogout: Function;
  alternative?: boolean,
}

const Header = ({session, alternative, handleLogin, handleLogout}: HeaderProps) => {
  return (
    <HeaderWrapper alternative={alternative}>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <StyledNav>
        {!session &&
          <Button primary onClick={handleLogin}>
            Dołącz do nas
          </Button>
        }
        {session &&
          <>
            <Link href={'/dashboard'}>
              <LinkWrapper primary>
                mój panel
              </LinkWrapper>
            </Link>
            <Button onClick={handleLogout}>
              Wyloguj się
            </Button>
          </>
        }
      </StyledNav>
    </HeaderWrapper>
  )
};

export default Header;

const StyledNav = styled.nav`
  display: flex;
`;

const HeaderWrapper = styled.header<{alternative?: boolean}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  zIndex: 10;
  padding: 25px 50px;
  background: ${({alternative}) => alternative ? '#ffffff' : 'transparent'};
  box-shadow: ${({alternative}) => alternative ? "0px 4px 14px -6px rgba(39, 46, 57, 0.1)" : "0px 4px 8px 1px rgba(21, 29, 56, 0.12)"};
  box-sizing: border-box;
`;

const LinkWrapper = styled.a<{primary?: boolean}>`
  display: block;
  width: auto;
  padding: 10px 15px;
  background-color: ${({primary}) => primary ? "#0F35B7" : "#ffffff"};
  color: ${({primary}) => primary ? "#ffffff" : "#0f35B7"};
  border-radius: 8px;
  line-height: 16px;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  letter-spacing: 1.25px;
  cursor: pointer;
`;