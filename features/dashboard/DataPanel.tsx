import styled from 'styled-components';

import DataCard from './DataCard';
import OffersList from './OffersList';

import MainPanelContainer from './components/MainPanelContainer';

import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';

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
      <SectionTitle text={'twoje dane'} />
      <DataCard />
      <RowContainer>
        <SectionTitle text={'oferty'}/>
        <NewOfferBtn primary>
          + Dodaj nową ofertę
        </NewOfferBtn>
      </RowContainer>
      <OffersList />
    </MainPanelContainer>
  );
};

export default DataPanel;
