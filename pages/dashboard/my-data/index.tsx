import { useSession } from "next-auth/client";
import Head from "next/head";

import DataPanel from "../../../components/pages/DataPanel";

const DataPage = () => {
	const [session, loading] = useSession();

  return (
		<>
			<Head>
				<title>Data</title>
			</Head>
			<DataPanel 
				session={session} 
				userData={{}} 
				offers={[]}
			/>
		</>
	)
};

export default DataPage;

// export async function  /