import { Session } from "next-auth";
import {getSession, signOut } from "next-auth/client";
import Head from "next/head";

import DataPanel from "../../components/pages/DataPanel";
import PanelTemplate from "../../components/templates/PanelTemplate";
import { ERROR_CODES } from "../../lib";
import useUser from "../../components/lib/useUser";

type Props = {
	session: Session;
}
const DataPage = ({session}: Props) => {
	const {user} = useUser(null);

	if (!user.data || user.loading) {
		return null;
	}

	if (user.error && user.error.message === ERROR_CODES.authError) {
    signOut();
  }

  return (
		<>
			<Head>
				<title>Data</title>
			</Head>
			<PanelTemplate session={session}>
				<DataPanel userData={user.data} offers={[]}/>
			</PanelTemplate>
		</>
	)
};

export default DataPage;

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