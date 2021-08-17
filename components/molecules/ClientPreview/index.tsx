import styled from 'styled-components';
import {RemoveCircleOutline, Chat, CalendarToday} from "@material-ui/icons";
import ProfileImage from '../../organisms/ProfileImage';
import ActionButton from '../../atoms/ActionBtn';

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  profilePhoto: {
    url: string,
  } | null;
  handleRemoveClick: Function;
  handleMessageClick: Function;
  handleEditCalendar: Function;
};

const ClientPreview = ({
  firstName, 
  lastName, 
  profilePhoto, 
  handleRemoveClick, 
  handleMessageClick,
  handleEditCalendar
}: Props) => {
  return (
    <ClientBarWrapper>
      <div className={"row-container"}>
        <ProfileImage imgUrl={profilePhoto ? profilePhoto.url : ""} inEditState={false} width={"60px"} height={"60px"}/>
        <Name>{firstName} {lastName}</Name>
      </div>
      <div className={"row-container"}>
        <ActionButton onClick={handleEditCalendar} type={"button"}>
          <CalendarToday style={{color: "primary", fontSize: 25}} />
        </ActionButton>
        <ActionButton onClick={handleMessageClick} type={"button"}>
          <Chat style={{color: "primary", fontSize: 25}} />
        </ActionButton>
        <ActionButton onClick={handleRemoveClick} type={"button"}>
          <RemoveCircleOutline style={{color: "primary", fontSize: 25}} />
        </ActionButton>
      </div>
    </ClientBarWrapper>
  )
};

export default ClientPreview;

const ClientBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  padding: 5px;
  margin-bottom: 10px;

  .row-container {
    display: flex;
    align-items: center;
  }
`;

const Name = styled.p`
  margin-left: 10px;
`;
