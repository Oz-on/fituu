import Link from 'next/link';
import styled from 'styled-components';

import EditIcon from '../../atoms/EditIcon';

import {UserDataProps} from '../../../lib/contexts/UserDataProvider';
import Chip from '../../atoms/Chip';

type DataCardProps = {
  userData: UserDataProps,
}

const DataCard = ({userData}: DataCardProps) => {
  const {firstName, lastName, city, tags, type, description} = userData;
  return (
    <DataCardContainer>
      <RowContainer>
        <Title>Twoje dane</Title>
          <Link href={'/my-data/edit'}>
            <EditLink>
              <EditIcon />
              Edytuj dane
            </EditLink>
          </Link>
      </RowContainer>
      <MainContentContainer>
        <Row>
          <DataRowTitle>Imię i nazwisko</DataRowTitle>
          <DataRowContent>{`${firstName} ${lastName}`}</DataRowContent>
        </Row>
        <Row>
          <DataRowTitle>Specjalizacja</DataRowTitle>
          <DataRowContent>{type}</DataRowContent>
        </Row>
        <Row>
          <DataRowTitle>Kategoria</DataRowTitle>
          <CategoriesRowContent>{tags.map(tag => <Chip margin={'5px'}>{tag.title}</Chip>)}</CategoriesRowContent>
        </Row>
        <Row>
          <DataRowTitle>Lokalizacja</DataRowTitle>
          <DataRowContent>{city}</DataRowContent>
        </Row>
        <Row>
          <DataRowTitle>Opis</DataRowTitle>
          <DataRowContent>{description}</DataRowContent>
        </Row>
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

const Row = styled.div`
  display: flex;
`;

const DataCardContainer = styled(Card)`
  width: 85%;
  padding-left: 15px;
`;

const MainContentContainer = styled.div`
  display: grid;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
`;

const DataRowTitle = styled(Text)`
  width: 15%;
  margin: 10px 0;
  font-weight: 500;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #838999;
`;

const DataRowContent = styled(Text)`
  width: 80%;
  margin: 10px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #272E39;
`;

const CategoriesRowContent = styled(DataRowContent)`
  display: flex;
`

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #272E39;
`;

const EditLink = styled.a`
  color: #F7367D;
  text-decoration: underline;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
`;
