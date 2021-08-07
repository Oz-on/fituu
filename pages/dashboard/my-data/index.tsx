import { useSession, getSession } from "next-auth/client";
import Head from "next/head";

import DataPanel from "../../../components/pages/DataPanel";
import { useUser } from "../../../lib/contexts/UserDataProvider";

const DataPage = () => {
	const [session, loading] = useSession();
	const {user, isLoading} = useUser(null);

	if (loading || isLoading) {
		return null;
	}

  return (
		<>
			<Head>
				<title>Data</title>
			</Head>
			<DataPanel 
				session={session} 
				userData={user}
				offers={[]}
			/>
		</>
	)
};

export default DataPage;

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