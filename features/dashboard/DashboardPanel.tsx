import styled from 'styled-components';
import {useSession} from 'next-auth/client';

import MainPanelContainer from './components/MainPanelContainer';
import SectionTitle from '../../components/SectionTitle';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Card from '../../components/Card';
import DataCard from './DataCard';


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

const StatsCard = styled(Card)`
  margin-right: 30px;
  width: 20%;
  display: flex;
  flex-direction: column;
  max-height: 120px;
  justify-content: space-between;
`;

const CardStatsTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  // line-height: 16px;
  /* or 160% */

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #838999;
`;

const StatsValue = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #272E39;
`;


const DashboardPanel = () => {
  const [session, loading] = useSession();
  return (
    <MainPanelContainer>
      <SectionTitle text={'dashboard'}/>
      <FirstRow>
        <RowContainer>
          <Image source={'https://picsum.photos/80/80'} width={80} height={80} />
          <GreetingText>Witaj, {session.user.email}</GreetingText>
        </RowContainer>
        <NewUserBtn primary>+ Dodaj nowego klienta</NewUserBtn>
      </FirstRow>
      <SecondRow>
        <StatsCard>
          <CardStatsTitle>Liczba Wyświetleń dziennie</CardStatsTitle>
          <StatsValue>26</StatsValue>
        </StatsCard>
        <StatsCard>
          <CardStatsTitle>Liczba wyświetleń miesięcznie</CardStatsTitle>
          <StatsValue>3450</StatsValue>
        </StatsCard>
        <StatsCard>
          <CardStatsTitle>Twoja ocena</CardStatsTitle>
          <StatsValue>5</StatsValue>
        </StatsCard>
      </SecondRow>
      <DataCard/>
    </MainPanelContainer>
  );
};

export default DashboardPanel;