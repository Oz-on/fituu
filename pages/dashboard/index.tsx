import Head from "next/head";
import {getSession, signOut,} from "next-auth/client";

import DashboardPanel from "../../components/pages/Dashboard";

import { ERROR_CODES } from "../../lib";
import { Session } from "next-auth";
import PanelTemplate from "../../components/templates/PanelTemplate";
import useClients from "../../components/lib/useClients";
import useUser from "../../components/lib/useUser";

type Props = {
  session: Session;
}

const Dashboard = ({session}: Props) => {
  const {user} = useUser();
  const {clients, clientsLoading} = useClients();
  
  if (!user.data || user.loading ) {
    return null;
  }
  
  if (user.error && user.error.message === ERROR_CODES.authError) {
    signOut();
  }

  if (user.data && (user.data.type === "" || user.data.type === "Klient")) {
    return null;
  }
  

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PanelTemplate session={session}>
        <DashboardPanel 
          userData={user.data} 
          clients={clients} 
          clientsLoading={clientsLoading}
        />
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