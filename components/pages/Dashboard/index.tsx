import {useState} from "react";
import styled from 'styled-components';

import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';
import StatsCard from '../../organisms/StatsCard';
import DataCard from '../../organisms/DataCard';
import ProfileImage from '../../organisms/ProfileImage';
import ClientsList from '../../organisms/ClientsList';
import NewClientForm from '../../organisms/NewClientForm';

import {Client} from "../../lib/useClients";
import {UserDataProps} from "../../lib/useUser";

type DashboardPanelProps = {
  userData: UserDataProps;
  clients: Array<Client>;
  clientsLoading: boolean;
};

const Dashboard = ({userData, clients, clientsLoading}: DashboardPanelProps) => {
  const [newClientFormVisible, setNewClientFormVisible] = useState(false);

  return (
    <Container>
      <NewClientForm 
        visible={newClientFormVisible} 
        handleCancelClick={() => setNewClientFormVisible(false)} 
        handleAddClientClick={() => {}}
      />
      <SectionTitle>dashboard</SectionTitle>
      <RowContainer>
        <ProfileImage 
          imgUrl={userData.profilePhoto ? userData.profilePhoto.url : ''} 
          width={'80px'} 
          height={'80px'} 
          inEditState={false} 
        />
        <GreetingText>Witaj, {userData.firstName}</GreetingText>
      </RowContainer>
      <RowContainer>
        <StatsCard title={'Liczba wyświetleń dziennie'} value={26} />
        <StatsCard title={'Liczba wyświetleń miesięcznie'} value={3450}/>
        <StatsCard title={'Twoja ocena'} value={5} />
      </RowContainer>
      <DataCard userData={userData} />
      <RowContainer withSpace={true}>
        <SectionTitle>Klienci</SectionTitle>
        <ActionButton 
          primary 
          onClick={() => setNewClientFormVisible(true)}
          type={'button'}
        >
          + Dodaj nowego klienta
        </ActionButton>
      </RowContainer>
      <ClientsList clients={clients} loading={clientsLoading}/>
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
`;

const RowContainer = styled.div<{withSpace: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({withSpace}) => withSpace ? 'space-between' : 'flex-start'};
  padding: 25px 0;
`;

const GreetingText = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 2.5px;
  color: #272E39;
  margin-left: 20px;
`;


export default Dashboard;