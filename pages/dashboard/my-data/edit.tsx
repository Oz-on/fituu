import Head from "next/head";
import { useSession, getSession } from "next-auth/client";

import EditDataPanel from "../../../components/pages/EditDataPanel";
import { useUser } from "../../../lib/contexts/UserDataProvider";


const EditDataPage = () => {
  const [session, loading] = useSession();
  const {user, isLoading} = useUser(null);

  if (loading || isLoading) {
    return null;
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