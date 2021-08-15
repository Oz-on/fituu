import styled from 'styled-components';

import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';

import DataCard from '../../organisms/DataCard';
import OffersList from '../../organisms/OffersList';
import {OfferProps} from '../../organisms/Offer';

import {UserDataProps} from '../../../lib/contexts/UserDataProvider';

type DataPanelProps = {
  userData: UserDataProps,
  offers: Array<OfferProps>,
};

const DataPanel = ({userData, offers}: DataPanelProps) => {
  return (
    <>
      <SectionTitle>twoje dane</SectionTitle>
      <DataCard userData={userData} />
      <RowContainer>
        <SectionTitle>Oferty</SectionTitle>
        <ActionButton type={'button'} primary onClick={() => {}}>
          + Dodaj nową ofertę
        </ActionButton>
      </RowContainer>
      <OffersList offers={offers} />
    </>
  );
};

export default DataPanel;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 30px;
`;