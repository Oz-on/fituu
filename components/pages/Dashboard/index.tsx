import styled from 'styled-components';

import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';
import StatsCard from '../../organisms/StatsCard';
import DataCard from '../../organisms/DataCard';

import {UserDataProps} from '../../../lib/contexts/UserDataProvider';
import ProfileImage from '../../organisms/ProfileImage';

type DashboardPanelProps = {
  userData: UserDataProps;
}

const Dashboard = ({userData}: DashboardPanelProps) => {
  return (
    <>
      <SectionTitle>dashboard</SectionTitle>
      <FirstRow>
        <RowContainer>
          <ProfileImage 
            imgUrl={userData.profilePhoto ? userData.profilePhoto.url : ''} 
            width={'80px'} 
            height={'80px'} 
            inEditState={false} 
          />
          <GreetingText>Witaj, {userData.firstName}</GreetingText>
        </RowContainer>
        <ActionButton 
          primary 
          onClick={() => {}}
          type={'button'}
        >
          + Dodaj nowego klienta
        </ActionButton>
      </FirstRow>
      <SecondRow>
        <StatsCard title={'Liczba Wyświetleń dziennie'} value={26} />
        <StatsCard title={'Liczba wyświetleń miesięcznie'} value={3450}/>
        <StatsCard title={'Twoja ocena'} value={5} />
      </SecondRow>
      <DataCard userData={userData} />
    </>
  );
};

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
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

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Dashboard;