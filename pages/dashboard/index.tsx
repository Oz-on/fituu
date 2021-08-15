import Head from "next/head";
import {getSession, signOut,} from "next-auth/client";

import DashboardPanel from "../../components/pages/Dashboard";

import { useUser } from "../../lib/contexts/UserDataProvider";
import { ERROR_CODES } from "../../lib";
import { Session } from "next-auth";
import PanelTemplate from "../../components/templates/PanelTemplate";

type Props = {
  session: Session;
}

const Dashboard = ({session}: Props) => {
  const {user, isLoading, error} = useUser();

  if (isLoading) {
    return null;
  }

  if (error && error.message === ERROR_CODES.authError) {
    signOut();
  }

  // If user name and type is null redirect to data completion page

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PanelTemplate session={session}>
        <DashboardPanel userData={user} />
      </PanelTemplate>
    </>
  )
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {session}
  }
}