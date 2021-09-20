import styled from "styled-components";
import { getLastMessageDate } from "../../../lib";
import MessageBox from "../../atoms/MessageBox";
import { ConversationParticipant } from "../../lib/useConversations";
import ProfileImage from "../../organisms/ProfileImage";

type Props = {
  owner: boolean;
  content: string;
  createDate: string;
  author: ConversationParticipant;
};

const Message = ({owner, content, createDate, author}: Props) => {
  return (
    <Container owner={owner}>
      <div className={'author-container'}>
        <ProfileImage imgUrl={author.profilePhoto.url} inEditState={false} width={"50px"} height={"50px"}/>
        <span className={'author-name'}>{author.firstName}</span>
      </div>
      <div className={"content-part"}>
        <MessageBox>{content}</MessageBox>
        <span className={"date"}>{getLastMessageDate(createDate)}</span>
      </div>
    </Container>
  );
};

export default Message;

const Container = styled.div<{owner?: boolean}>`
  display: flex;
  flex-direction: ${({owner}) => owner ? "row-reverse" : "row"};
  align-items: center;
  position: relative;

  .author-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date, .author-name {
    letter-spacing: 1.5px;
    font-size: 12px;
    font-family: Roboto, sans-serif;
  }

  .date {
    position: absolute;
    top: 100%;
    margin-top: 3px;
    margin-right: 5px;
  }

  .content-part {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: ${({owner}) => owner ? "0 10px 0 0" : "0 0 0 10px"};
  }

`;