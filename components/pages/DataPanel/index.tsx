import styled from 'styled-components';

import DataCard, {DataCardProps} from '../../organisms/DataCard';
import OffersList from '../../organisms/OffersList';
import {OfferProps} from '../../organisms/Offer';

import MainPanelContainer from '../../atoms/MainPanelContainer';

import SectionTitle from '../../atoms/SectionTitle';
import Button from '../../atoms/Button';

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

type DataPanelProps = {
  userData: DataCardProps,
  offers: Array<OfferProps>,
};

const DataPanel = ({userData, offers}: DataPanelProps) => {
  return (
    <MainPanelContainer>
      <SectionTitle>twoje dane</SectionTitle>
      <DataCard {...userData}/>
      <RowContainer>
        <SectionTitle>Oferty</SectionTitle>
        <NewOfferBtn primary>
          + Dodaj nową ofertę
        </NewOfferBtn>
      </RowContainer>
      <OffersList offers={offers} />
    </MainPanelContainer>
  );
};

export default DataPanel;
