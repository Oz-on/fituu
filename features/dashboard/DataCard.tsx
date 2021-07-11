import {useEffect} from 'react';
import Link from 'next/link';
import {useSession} from 'next-auth/client';
import styled from 'styled-components';

import Card from '../../components/Card';
import EditIcon from '../../components/EditIcon';
import { useUserMachine } from './machines';

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

const DataCard = () => {
  // NOTE: this hook should return user data
  const [state, send] = useUserMachine();

  useEffect(() => {
    send({type: 'FETCH'});
  }, []);

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
          <DataRowContent>Janina Kowalska</DataRowContent>
          <DataRowContent>Trener Personalny</DataRowContent>
          <DataRowContent>Odchudzanie, wzmacnianie</DataRowContent>
          <DataRowContent>Wrocław</DataRowContent>
          <DataRowContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat.</DataRowContent>
        </div>
      </MainContentContainer>
    </DataCardContainer>
  )
};


export default DataCard;