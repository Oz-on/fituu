import styled from "styled-components";
import Message from "../../molecules/Message";

import {Message as MessageType} from "../../lib/useMessages";
import { ConversationParticipantsMap } from "../../lib/useConversations";

type Props = {
  messages: Array<MessageType>;
  ownerId: number;
  participants: ConversationParticipantsMap;
};

const MessagesList = ({messages, ownerId, participants}: Props) => {
  return (
    <Container>
      {
        messages.map(message => (
          <MessageContainer>
            <Message 
              owner={message.author === ownerId} 
              author={participants[message.author]}
              createDate={message.timestamp}
              content={message.content}
            />
          </MessageContainer>
        ))
      }
    </Container>
  );
};

export default MessagesList;

const Container = styled.div`

`;

const MessageContainer = styled.div `
  margin-bottom: 20px;
`;
