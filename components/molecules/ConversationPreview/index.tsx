import styled from "styled-components";
import { getLastMessageDate } from "../../../lib";
import { Conversation } from "../../lib/useConversations";

type Props = {
  conversation: Conversation;
  onClick: Function;
};

const ConversationPreview = ({conversation, onClick}: Props) => {
  return (
    <Container onClick={onClick}>
      <div className={"row-container"}>
        <p className={"names-paragraph"}>{conversation.participants.map(participant => participant.firstName).join(", ")}</p>
        <p className={"last-message-date"}>{getLastMessageDate(conversation.lastMessage.timestamp)}</p>
      </div>
      <p className={"last-message"}>{conversation.lastMessage.content}</p>
    </Container>
  );
};

export default ConversationPreview;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 5px;

  p {
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  .row-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }

  .names-paragraph {
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 16px;
  }

  .last-message {
    color: #838999;
    font-size: 14px;
  }
  .last-message-date {
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  :hover {
    cursor: pointer;
  }
`;
