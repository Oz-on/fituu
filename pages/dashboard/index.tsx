import Head from "next/head";
import {getSession, useSession} from "next-auth/client";

import Nav from "../../components/organisms/Nav";
import DashboardPanel from "../../components/pages/Dashboard";
import PageContainer from '../../components/atoms/PageContainer';

import Page from '../../components/Page';
import Header from '../../components/organisms/AlternativeHeader';


// This page should be secured
const Dashboard = () => {
  const [session, loading] = useSession();
  return (
    <Page>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <PageContainer>
        <Nav/>
        <DashboardPanel 
          email={session.user.email} 
          profilePictureUrl={'https://picsum.photos/80/80'} 
          userData={{}}
        />
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