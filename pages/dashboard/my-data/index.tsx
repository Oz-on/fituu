import {useEffect} from 'react';
import Head from 'next/head';
import {useSession} from 'next-auth/client';
import styled from 'styled-components';

import Header from '../../../components/AlternativeHeader';
import SideNav from '../../../components/SideNav';
import DataPanel from '../../../features/dashboard/DataPanel';
import PageContainer from '../../../features/dashboard/components/PageContainer';

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