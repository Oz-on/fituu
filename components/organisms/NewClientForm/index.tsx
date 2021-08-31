import {useState} from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import ActionButton from "../../atoms/ActionBtn";

type Props = {
  visible: boolean;
  handleAddClientClick: Function;
  handleCancelClick: Function;
}
const NewClientForm = ({visible, handleAddClientClick, handleCancelClick}: Props) => {
  const [email, setEmail] = useState("");

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
        }}}
    >
      <Container>
        <ModalTitle>Podaj adres email klienta</ModalTitle>
        <Input type={"text"} value={email} onChange={(event) => setEmail(event.target.value)}/>
        <ButtonsContainer>
          <ActionButton primary={false} onClick={handleCancelClick} type={"button"}>Anuluj</ActionButton>
          <ActionButton primary={true} onClick={handleAddClientClick} type={"button"}>Dodaj</ActionButton>
        </ButtonsContainer>
      </Container>
    </ReactModal>
  )
};

export default NewClientForm;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ModalTitle = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: ${props => props.disabled ? '#F2F3F7' : '#FFFFFF'};
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