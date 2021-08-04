import Head from "next/head";
import {getSession, useSession} from "next-auth/client";

import DashboardPanel from "../../components/pages/Dashboard";

import { useUser } from "../../lib/contexts/UserDataProvider";

const Dashboard = () => {
  const [session, loading] = useSession();
  const {user, isLoading} = useUser();

  if (isLoading || loading) {
    return null;
  }

  console.log('user: ', user);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardPanel 
        session={session}
        email={'oskarad.2000@gmail.com'} 
        profilePictureUrl={'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27'}
        userData={user} 
      />
    </>
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