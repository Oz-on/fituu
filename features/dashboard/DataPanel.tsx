import styled from 'styled-components';

import DataCard from './DataCard';
import OffersList from '../../components/organisms/OffersList';

import MainPanelContainer from './components/MainPanelContainer';

import SectionTitle from '../../components/atoms/SectionTitle';
import Button from '../../components/atoms/Button';

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 30px;
`;

const NewOfferBtn = styled(Button)`
  max-height: 50px;
  padding: 20px;
  background-color: #F7367D;
`;

const DataPanel = () => {
  return (
    <MainPanelContainer>
      <SectionTitle>twoje dane</SectionTitle>
      <DataCard />
      <RowContainer>
        <SectionTitle>Oferty</SectionTitle>
        <NewOfferBtn primary>
          + Dodaj nową ofertę
        </NewOfferBtn>
      </RowContainer>
      <OffersList offers={[]} />
    </MainPanelContainer>
  );
};

export default DataPanel;
