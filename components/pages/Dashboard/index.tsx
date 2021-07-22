import styled from 'styled-components';
import {useSession} from 'next-auth/client';

import MainPanelContainer from '../../atoms/MainPanelContainer';
import SectionTitle from '../../atoms/SectionTitle';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import StatsCard from '../../organisms/StatsCard';
import DataCard, {DataCardProps} from '../../organisms/DataCard';

type DashboardPanelProps = {
  email: string;
  profilePictureUrl: string;
  userData: DataCardProps;
}

const DashboardPanel = ({email, userData, profilePictureUrl}: DashboardPanelProps) => {
  const [session, loading] = useSession();
  return (
    <MainPanelContainer>
      <SectionTitle>dashboard</SectionTitle>
      <FirstRow>
        <RowContainer>
          <Image source={profilePictureUrl} width={80} height={80} />
          <GreetingText>Witaj, {email}</GreetingText>
        </RowContainer>
        <NewUserBtn primary>+ Dodaj nowego klienta</NewUserBtn>
      </FirstRow>
      <SecondRow>
        <StatsCard title={'Liczba Wyświetleń dziennie'} value={26} />
        <StatsCard title={'Liczba wyświetleń miesięcznie'} value={3450}/>
        <StatsCard title={'Twoja ocena'} value={5} />
      </SecondRow>
      <DataCard {...userData} />
    </MainPanelContainer>
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

const NewUserBtn = styled(Button)`
  max-height: 50px;
  padding: 20px;
  background-color: #F7367D;
`;

export default DashboardPanel;