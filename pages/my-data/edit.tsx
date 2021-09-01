import Head from "next/head";
import { getSession, signOut } from "next-auth/client";

import EditDataPanel from "../../components/pages/EditDataPanel";
import useUser from "../../components/lib/useUser";
import { ERROR_CODES } from "../../lib";
import { Session } from "next-auth";
import PanelTemplate from "../../components/templates/PanelTemplate";

type Props = {
  session: Session;
}

const EditDataPage = ({session}: Props) => {
  const {user, updateUserData} = useUser(null);

  if (!user.data || user.loading) {
    return null;
  }

  if (user.error && user.error.message === ERROR_CODES.authError) {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Edit data</title>
      </Head>
      <PanelTemplate session={session}>
        <EditDataPanel
          userData={user.data} 
          updateUserData={updateUserData}
        />
      </PanelTemplate>
    </>
  );
};

export default EditDataPage;

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