import Head from "next/head";
import { useSession } from "next-auth/client";

import EditDataPanel from "../../../components/pages/EditDataPanel";


const EditDataPage = () => {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Edit data</title>
      </Head>
      <EditDataPanel session={session}/>
    </>
  );
};

export default EditDataPage;
