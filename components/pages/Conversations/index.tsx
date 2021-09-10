import {useState} from "react";
import styled from "styled-components";
import { Create, Refresh } from "@material-ui/icons";
import { Conversation } from "../../lib/useConversations";
import ConversationsList from "../../organisms/ConversationsList";
import ActionButton from "../../atoms/ActionBtn";
import NewConversationForm from "../../organisms/NewConversationForm";
import { Client } from "../../lib/useClients";

type Props = {
  conversations: Array<Conversation>;
  clients: Array<Client>,
  handleOpenConversation: Function;
  handleRefreshConversation: Function;
  handleCreateConversation: Function;
};

const Conversations = ({
  conversations,
  clients,
  handleOpenConversation,
  handleRefreshConversation,
  handleCreateConversation,
}: Props) => {
  const [isCreationModalVisible, setCreationModalToVisible] = useState(false);
  return (
    <>
      <NewConversationForm
        visible={isCreationModalVisible}
        handleCreateConversation={handleCreateConversation}
        handleCancelClick={() => setCreationModalToVisible(false)}
        clients={clients}
      />
      <Container>
        <ButtonsContainer>
          <ActionButton 
            type={"button"} 
            data-testID={"creatConversationBtn"}
            onClick={() => setCreationModalToVisible(true)}
          >
            <Create style={{color: "primary", fontSize: 25}}/>
          </ActionButton>
          <ActionButton 
            type={"button"} 
            data-testID={"refreshConversationsListBtn"}
            onClick={handleRefreshConversation}  
          >
            <Refresh style={{color: "primary", fontSize: 25}}/>
          </ActionButton>
        </ButtonsContainer>
        <ConversationsList conversations={conversations}/>
      </Container>
    </>
  );
};

export default Conversations;

const Container = styled.div`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 20px;
`;