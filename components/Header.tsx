/**
 * Component placed at the top of the page with 
 * authentication buttons, logo and navigation
 */

import React from 'react';
import {signIn, signOut, useSession} from 'next-auth/client';
import styled from 'styled-components';
import Link from 'next/link';

import Button from './Button';
import Logo from './Logo';

const StyledHeader = styled.header`
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

const StyledNav = styled.nav`
  display: flex;
`;

const Header = () => {
  const [session, loading] = useSession();

  const handleLogin = () => {
    signIn('cognito', {
      callbackUrl: `${window.location.origin}/dashboard`
    })
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <StyledHeader>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <StyledNav>
        {!session &&
          <>
            <Button primary onClick={handleLogin}>
              Dołącz do nas
            </Button>
          </>
        }
        {session &&
          <>
            <Link href={'/dashboard'}>
              <a>
                <Button>mój panel</Button>
              </a>
            </Link>
            <Button onClick={handleLogout}>
              Wyloguj się
            </Button>
          </>
        }
      </StyledNav>
    </StyledHeader>
  )
};

export default Header