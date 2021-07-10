import Head from 'next/head';
import {getSession} from 'next-auth/client';

import SideNav from '../../features/dashboard/SideNav';
import DashboardPanel from '../../features/dashboard/DashboardPanel';
import PageContainer from '../../features/dashboard/components/PageContainer';

import Page from '../../components/Page';
import Header from '../../components/AlternativeHeader';


// This page should be secured
const Dashboard = () => {
  return (
    <Page>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <PageContainer>
        <SideNav/>
        <DashboardPanel/>
      </PageContainer>
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