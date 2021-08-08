import Head from "next/head";
import { getSession, signOut } from "next-auth/client";

import EditDataPanel from "../../../components/pages/EditDataPanel";
import { useUser } from "../../../lib/contexts/UserDataProvider";
import { ERROR_CODES } from "../../../lib";
import { Session } from "next-auth";

type Props = {
  session: Session;
}

const EditDataPage = ({session}: Props) => {
  const {user, isLoading, error} = useUser(null);

  if (isLoading) {
    return null;
  }

  if (error && error.message === ERROR_CODES.authError) {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Edit data</title>
      </Head>
      <EditDataPanel session={session} userData={user}/>
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