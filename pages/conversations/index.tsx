import Head from "next/head";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/client";
import useUser from "../../components/lib/useUser";
import PanelTemplate from "../../components/templates/PanelTemplate";
import { ERROR_CODES } from "../../lib";
import Conversations from "../../components/pages/Conversations";
import useClients from "../../components/lib/useClients";

type Props = {
  session: Session;
};

const Page = ({session}: Props) => {
  const {user} = useUser();
  const {clients, clientsLoading} = useClients();

  if (!user.data || user.loading || clientsLoading) {
    return null;
  }

  if (user.error && user.error.message === ERROR_CODES.authError) {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Konwersacje</title>
      </Head>
      <PanelTemplate session={session}>
        <Conversations
          conversations={[]}
          clients={clients}
          handleCreateConversation={() => {}}
          handleOpenConversation={() => {}}
          handleRefreshConversation={() => {}}
        />
      </PanelTemplate>
    </>
  )
};

export default Page;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {
    props: {
      session
    },
  };
}
