import {Chat} from "@material-ui/icons";
import styled from "styled-components";
import ActionButton from "../../atoms/ActionBtn";

import ProfileImage from "../ProfileImage";

type Props = {
  type: string;
  fullName: string;
  profileImageUrl: string;
  handleSendMessage: Function;
}

const InstructorPane = ({type, fullName, profileImageUrl, handleSendMessage}: Props) => {
  return (
    <Card>
      <p className={"title"}>Twój {type} </p>
      <p className={"instructor-name"}>{fullName}</p>
      <div className={"row-container"}>
        <ProfileImage 
          imgUrl={profileImageUrl}
          width={"100px"}
          height={"100px"}
          inEditState={false}
        />
        <ButtonsContainer>
          <ActionButton 
            type={"button"} 
            className={"button"} 
            data-testID={""}
            onClick={handleSendMessage}
          >
            <p>Napisz wiadomość</p>
            <Chat style={{color: "primary", fontSize: 25}}/>
          </ActionButton>
        </ButtonsContainer>
      </div>
    </Card>
  )
};

export default InstructorPane;

const Card = styled.div`
  width: 100%;
  min-height: 160px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding: 10px 10px;
  box-sizing: border-box;


  .row-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .title, .instructor-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #838999;

    text-align: center;
  }

  .title {
    font-size: 10px;
    font-weight: bold;
  }

  .instructor-name {
    font-size: 10px;
  }

  @media screen and (min-width: 1008px) {
    width: 40%;

    .row-container {
      flex-direction: row;
      align-items: center;

    }

    .title, .instructor-name {
      text-align: left;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;

  height: 100%;

  .button {
    display: flex;
  }
  .button p {
    margin-right: 5px;
    font-size: 10px;
  }
`;