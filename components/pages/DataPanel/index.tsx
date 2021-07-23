import styled from 'styled-components';

import MainPanelContainer from '../../atoms/MainPanelContainer';
import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';
import PageContainer from '../../atoms/PageContainer';

import DataCard, {DataCardProps} from '../../organisms/DataCard';
import OffersList from '../../organisms/OffersList';
import {OfferProps} from '../../organisms/Offer';
import Header from '../../organisms/Header/container';
import Nav from '../../organisms/Nav';

type DataPanelProps = {
  session: Object,
  userData: DataCardProps,
  offers: Array<OfferProps>,
};

const DataPanel = ({session, userData, offers}: DataPanelProps) => {
  return (
    <div className={'page'}>
      <Header session={session} alternative={true} />
      <PageContainer>
        <Nav />
        <MainPanelContainer>
          <SectionTitle>twoje dane</SectionTitle>
          <DataCard {...userData}/>
          <RowContainer>
            <SectionTitle>Oferty</SectionTitle>
            <ActionButton primary onClick={() => {}}>
              + Dodaj nową ofertę
            </ActionButton>
          </RowContainer>
          <OffersList offers={offers} />
        </MainPanelContainer>
      </PageContainer>
    </div>
  );
};

export default DataPanel;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 30px;
`;