import styled from "styled-components";
import { ConversationParticipantsMap } from "../../lib/useConversations";
import { Message } from "../../lib/useMessages";

import MessageInput from "../../molecules/MessageInput";
import MessagesList from "../../organisms/MessagesList";

type Props = {
  onMessageSend: (message: string) => void;
  messages: Array<Message>;
  ownerId: number;
  participants: ConversationParticipantsMap;
}

const Messages = ({onMessageSend, messages, ownerId, participants}: Props) => {
  return (
    <Container>
      <MessagesList 
        messages={messages} 
        ownerId={ownerId} 
        participants={participants}
      />
      <MessageInput onMessageSend={onMessageSend}/>
    </Container>
  )
};

export default Messages;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;