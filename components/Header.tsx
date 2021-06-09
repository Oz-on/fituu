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
  flex-direction: 'row';
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 50px;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const Header = () => {
  const [session, loading] = useSession();
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
            <Button>Zaloguj się</Button>
            <Button 
              primary 
              onClick={() => signIn('cognito', {
                callbackUrl: `${window.location.origin}/dashboard`
              })}
            >
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
            <Button>Wyloguj się</Button>
          </>
        }
      </StyledNav>
    </StyledHeader>
  )
};

export default Header