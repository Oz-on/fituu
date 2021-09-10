import styled from "styled-components";
import { Conversation } from "../../lib/useConversations";

import ConversationPreview from "../../molecules/ConversationPreview";

type Props = {
  conversations: Array<Conversation>;
};

const ConversationsList = ({conversations}: Props) => {

  const handleClick = (id: number) => {
    // TODO: Open conversation page
  };

  return (
    <Container>
      {conversations.length === 0 && <p className={"empty-text-info"}>Brak otwartych konwersacji</p>}
      {
        conversations.map(conversation => (
          <ConversationPreview conversation={conversation} onClick={() => handleClick(conversation.id)}/>
        ))
      }
    </Container>
  )
};

export default ConversationsList;

const Container = styled.div`
  .empty-text-info {
    text-align: center;
    font-family: Roboto, sans-serif;
    letter-spacing: 1.5px;
    font-size: 16px;
  }
`;
