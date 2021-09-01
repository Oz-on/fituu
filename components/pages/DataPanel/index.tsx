import styled from 'styled-components';

import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';

import DataCard from '../../organisms/DataCard';
import OffersList from '../../organisms/OffersList';
import {OfferProps} from '../../organisms/Offer';

import {UserDataProps} from '../../lib/useUser';

type DataPanelProps = {
  userData: UserDataProps,
  offers: Array<OfferProps>,
};

const DataPanel = ({userData, offers}: DataPanelProps) => {
  return (
    <Container>
      <SectionTitle>twoje dane</SectionTitle>
      <DataCard userData={userData} />
      <RowContainer>
        <SectionTitle>Oferty</SectionTitle>
        <ActionButton type={'button'} primary onClick={() => {}}>
          + Dodaj nową ofertę
        </ActionButton>
      </RowContainer>
      <OffersList offers={offers} />
    </Container>
  );
};

export default DataPanel;

const Container = styled.div`
  width: 85%;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;