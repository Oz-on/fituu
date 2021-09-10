import {useState} from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import ActionButton from "../../atoms/ActionBtn";
import ModalTitle from "../../atoms/ModalTitle";
import { Client } from "../../lib/useClients";
import ClientPicker from "../ClientPicker";

type Props = {
  visible: boolean;
  clients: Array<Client>;
  handleCreateConversation: Function;
  handleCancelClick: Function;
};

const useParticipants = (): [Array<number>, Function] => {
  const [selectedParticipants, selectParticipants] = useState([]);

  const updateParticipantsList = (id: number) => {
    let newList = [];
    if (selectedParticipants.includes(id)) {
      newList = selectedParticipants.filter(selectedId => selectedId !== id)
    } else {
      newList = [...selectedParticipants, id];
    }
    selectParticipants(newList)
  }

  return [selectedParticipants, updateParticipantsList];
};


const NewConversationForm = ({visible, clients, handleCreateConversation, handleCancelClick}: Props) => {
  const [description, setDescription] = useState("");
  const [selectedParticipants, updateParticipantsList] = useParticipants();

  return (
    <ReactModal
      isOpen={visible}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.33)",
        }, 
        content: {
          width: "50%",
          height: "60vh",
          left:"50%",
          top:"50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#f1f4f9"
        }}
      }
    >
      <Container>
        <ModalTitle>Nowa konwersacja</ModalTitle>
        <div className={"section-container"}>
          <Label>Opis konwersacji:</Label>
          <Input type={"text"} value={description} onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <div className={"section-container"}>
        <Label>uczestnicy:</Label>
          <ClientPicker 
            clients={clients}
            onSelectClient={updateParticipantsList}
          />
        </div>
        <ButtonsContainer>
          <ActionButton primary={false} onClick={handleCancelClick} type={"button"}>Anuluj</ActionButton>
          <ActionButton primary={true} onClick={() => handleCreateConversation(description, selectedParticipants)} type={"button"}>Stwórz</ActionButton>
        </ButtonsContainer>
      </Container>
    </ReactModal>
  )
};

export default NewConversationForm;

const Container = styled.div`
  width: 100%;
  height: 100%;

  .section-container {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: #FFFFFF;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding-left: 15px;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  padding-top: 10px;
  box-sizing: border-box;

  button:first-of-type {
    margin-top: 10px;
  }
  
  
  @media screen and (min-width: 1008px) {
    flex-direction: row;
    justify-content: center;

    button:first-of-type {
      margin-right: 10px;
      margin-top: 0px;
    }
    
  }
`;

const Label = styled.label`
	display: block;
  margin-bottom: 5px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 16px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: #272E39;
`;