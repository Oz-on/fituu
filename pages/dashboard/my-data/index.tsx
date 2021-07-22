import Head from 'next/head';
import styled from 'styled-components';

import PageContainer from '../../../components/atoms/PageContainer';
import Header from '../../../components/organisms/Header';
import SideNav from '../../../components/organisms/Nav';
import DataPanel from '../../../components/pages/DataPanel';

const Page = styled.div`
	min-height: 100vh;
`;

const DataPage = () => {
  return (
		<Page>
			<Head>
				<title>Data</title>
			</Head>
			<Header />
			<PageContainer>
				<SideNav />
				<DataPanel />
			</PageContainer>
		</Page>
	)
};

export default DataPage;

// export async function  /