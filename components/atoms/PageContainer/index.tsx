import React from 'react';
import styled from 'styled-components';

type PageContainerProps = {
  children: React.ReactNode;
}

const PageContainer = ({children}: PageContainerProps) => {
  return (
		<PageContainerWrapper>
			{children}
		</PageContainerWrapper>
	);
};

const PageContainerWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: auto auto;
`;

export default PageContainer;