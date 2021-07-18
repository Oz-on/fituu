import Head from 'next/head';

import PageContainer from '../../../features/dashboard/components/PageContainer';
import SideNav from '../../../features/dashboard/SideNav';
import EditDataPanel from '../../../features/dashboard/EditDataPanel';

import Page from '../../../components/Page';
import Header from '../../../components/organisms/Header/container';
import { useSession } from 'next-auth/client';

const EditDataPage = () => {
  const [session, loading] = useSession();

  return (
    <Page>
      <Head>
        <title>Edit data</title>
      </Head>
      <Header session={session} />
      <PageContainer>
        <SideNav />
        <EditDataPanel />
      </PageContainer>
    </Page>
  );
};

export default EditDataPage;
