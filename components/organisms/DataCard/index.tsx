import Link from 'next/link';
import styled from 'styled-components';

import EditIcon from '../../atoms/EditIcon';

export type DataCardProps = {
  fullName: string;
  specialization: string;
  categories: string;
  localization: string;
  description: string;
}

const DataCard = ({fullName, specialization, categories, localization, description}: DataCardProps) => {
  return (
    <DataCardContainer>
      <RowContainer>
        <Title>Twoje dane</Title>
        <Link href={'/dashboard/my-data/edit'}>
          <EditLink>
            <EditIcon />
            Edytuj dane
          </EditLink>
        </Link>
      </RowContainer>
      <MainContentContainer>
        <div>
          <DataRowTitle>Imię i nazwisko</DataRowTitle>
          <DataRowTitle>Specjalizacja</DataRowTitle>
          <DataRowTitle>Kategoria</DataRowTitle>
          <DataRowTitle>Lokalizacja</DataRowTitle>
          <DataRowTitle>Opis</DataRowTitle>
        </div>
        <div>
          <DataRowContent>{fullName}</DataRowContent>
          <DataRowContent>{specialization}</DataRowContent>
          <DataRowContent>{categories}</DataRowContent>
          <DataRowContent>{localization}</DataRowContent>
          <DataRowContent>{description}</DataRowContent>
        </div>
      </MainContentContainer>
    </DataCardContainer>
  )
};

export default DataCard;

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding: 10px 10px;
`;

const DataCardContainer = styled(Card)`
  width: 85%;
  padding-left: 15px;
`;

const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
`;

const DataRowTitle = styled(Text)`
  margin: 10px 0;
  font-weight: 500;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #838999;
`;

const DataRowContent = styled(Text)`
  margin: 10px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #272E39;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #272E39;
`;

const EditLink = styled.a`
  display: block;
  color: #F7367D;
  text-decoration: underline;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
`;
