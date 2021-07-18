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
}

const Header = ({session, handleLogin, handleLogout}: HeaderProps) => {
  return (
    <HeaderWrapper>
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
              <Button primary isLink={true}>
                mój panel
              </Button>
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

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  zIndex: 10;
  padding: 25px 50px;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
`;