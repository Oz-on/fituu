import {useState} from "react";
import styled from "styled-components";
import {Send} from "@material-ui/icons";

export type Props = {
  onMessageSend: (message: string) => void;
};

const MessageInput = ({onMessageSend}: Props) => {
  const [message, setMessage] = useState("");

  const handleChangeText = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      onMessageSend(message);
    }
  }

  return (
    <Container data-testID={"messageInput"}>
      <Input value={message} onChange={handleChangeText} multiline data-testID={"messageInputField"}/>
      <SendButton onClick={handleSendMessage} data-testID={"sendMsgBtn"}>
        <Send />
      </SendButton>
    </Container>
  )
};

export default MessageInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 10px;
  padding: 10px 10px;

  @media screen and (min-width: 1008px) {
    width: 70%;
    align-self: center;
  }
`;

const Input = styled.input`
  border: none;
  width: 90%;
`;

const SendButton = styled.button`
  display: flex; 
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;