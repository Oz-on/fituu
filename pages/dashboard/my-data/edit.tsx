import Head from 'next/head';

import PageContainer from '../../../components/atoms/PageContainer';
import SideNav from '../../../components/organisms/Nav';
import EditDataPanel from '../../../components/pages/EditDataPanel';

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
