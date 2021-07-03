import React from 'react';
import styled from 'styled-components';

import SideNavElement from './SideNavElement';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 40px;
`;

const SideNav = () => {
  return (
    <Container>
      <SideNavElement destination={'/dashboard'} description={'mój panel'} selected={true} />
      <SideNavElement destination={'/dashboard/my-data'} description={'moje dane'} selected={false} />
      <SideNavElement destination={'/dashboard/clients'} description={'klienci'} selected={false} />
      <SideNavElement destination={'/dashboard/messages'} description={'wiadomosći'} selected={false}/>
    </Container>
  );
}

export default SideNav;