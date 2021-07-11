import React from 'react';
import styled from 'styled-components';
import { useMachine } from '@xstate/react';

import {sideNavMachine} from './machines';

import SideNavElement from './components/SideNavElement';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 40px;
`;

const DASHBOARD_URL = '/dashboard';
const MY_DATA_URL = '/dashboard/my-data';
const EDIT_DATA_URL = '/dashboard/my-data/edit';
const CLIENTS_URL = '/dashboard/clients';
const MESSAGES_URL = '/dashboard/clients';

const SideNav = () => {
  const [state, send] = useMachine(sideNavMachine);

  // useEffect(() => {
  //   switch (window.location.pathname) {
  //     case DASHBOARD_URL:
  //       send('HIGHLIGHT_DASHBOARD');
  //       break;
  //     case MY_DATA_URL:
  //     case EDIT_DATA_URL:
  //       send('HIGHLIGHT_MYDATA');
  //       break;
  //     case CLIENTS_URL:
  //       send('HIGHLIGHT_CLIENTS');
  //       break;
  //     case MESSAGES_URL:
  //       send('HIGHLIGHT_MESSAGES');
  //   }
  // }, [window.location.pathname]);

  return (
    <Container>
      <SideNavElement destination={DASHBOARD_URL} description={'mój panel'} selected={state.value === 'dashboard'} />
      <SideNavElement destination={MY_DATA_URL} description={'moje dane'} selected={state.value === 'myData'} />
      <SideNavElement destination={CLIENTS_URL} description={'klienci'} selected={state.value === 'clients'} />
      <SideNavElement destination={MESSAGES_URL} description={'wiadomosći'} selected={state.value === 'messages'} />
    </Container>
  );
}

export default SideNav;