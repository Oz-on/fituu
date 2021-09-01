import styled from "styled-components";

import SectionTitle from "../../atoms/SectionTitle";
import DataCard from "../../organisms/DataCard";
import ProfileImage from "../../organisms/ProfileImage";
import InstructorPane from "../../organisms/InstructorPane";

import { UserDataProps } from "../../lib/useUser";
import EmptyInstructorPane from "../../organisms/EmptyInstructorPane";

type Props = {
  user: UserDataProps;
};

const Dashboard = ({user}: Props) => {

  const sendMessage = () => {};
  return (
    <Container>
      <SectionTitle>dashboard</SectionTitle>
      <RowContainer>
        <ProfileImage 
          imgUrl={user.profilePhoto ? user.profilePhoto.url : ''} 
          width={'80px'} 
          height={'80px'} 
          inEditState={false} 
        />
        <GreetingText>Witaj, {user.firstName}</GreetingText>
      </RowContainer>
      <RowContainer>
        {user.trainers.length === 0 &&<EmptyInstructorPane />}
        {user.trainers.map(trainer =>
          <InstructorPane
          fullName={`${trainer.firstName} ${trainer.lastName}`}
          type={"Trener personalny"}
          profileImageUrl={trainer.profilePhoto ? trainer.profilePhoto.url : ""}
          handleSendMessage={sendMessage}
        />  
        )}
        
      </RowContainer>
      <DataCard userData={user} />
    </Container>
  );
};

export default Dashboard;

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
