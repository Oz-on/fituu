import Head from "next/head";
import {getSession, signOut,} from "next-auth/client";

import ClientDashboard from "../../components/pages/ClientDashboard";
import InstructorDashboardView from "../../components/views/Dashboard";

import { ERROR_CODES } from "../../lib";
import { Session } from "next-auth";
import PanelTemplate from "../../components/templates/PanelTemplate";
import useUser from "../../components/lib/useUser";

type Props = {
  session: Session;
}

const Dashboard = ({session}: Props) => {
  const {user} = useUser();
  
  if (!user.data || user.loading ) {
    return null;
  }
  
  if (user.error && user.error.message === ERROR_CODES.authError) {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PanelTemplate session={session}>
        {user.data.type === "" || user.data.type === "Klient" &&
          <ClientDashboard user={user.data} />
        }
        {user.data.type === "" || user.data.type !== "Klient" &&
          <InstructorDashboardView user={user.data}/>
        }
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