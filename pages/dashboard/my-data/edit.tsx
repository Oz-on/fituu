import Head from 'next/head';

import PageContainer from '../../../features/dashboard/components/PageContainer';
import Page from '../../../components/Page';
import Header from '../../../components/Header';
import SideNav from '../../../components/SideNav';
import EditDataPanel from '../../../features/dashboard/EditDataPanel';

const EditDataPage = () => {
  return (
    <Page>
      <Head>
        <title>Edit data</title>
      </Head>
      <Header />
      <PageContainer>
        <SideNav />
        <EditDataPanel />
      </PageContainer>
    </Page>
  );
};

export default EditDataPage;
