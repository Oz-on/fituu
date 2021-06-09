import React from 'react';
import Head from 'next/head';
import {getSession} from 'next-auth/client';
import styled from 'styled-components';

import Header from '../../components/AlternativeHeader';
import SideNav from '../../components/SideNav';
import DashboardPanel from '../../components/DashboardPanel';

const Page = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto auto;
`;

// This page should be secured
const Dashboard = () => {
  return (
    <Page>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <Container>
        <SideNav/>
        <DashboardPanel/>
      </Container>
    </Page>
  )
};

export default Dashboard;

export async function getServerSideProps(context) {
  const {res} = context;
  const session = await getSession(context);

  if (!session) {
    res.writehead(302, {
      Location: '/',
    });

    return res.end();
  }

  return {
    props: {session}
  }
}