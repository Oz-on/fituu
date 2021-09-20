import styled from "styled-components";

type Props = {
  children: string;
};

const MessageBox = ({children}: Props) => {
  return (
    <Container>
      <ContentMessage>{children}</ContentMessage>
    </Container>
  );
};

export default MessageBox;

const ContentMessage = styled.p`
  font-family: ${({theme}) => theme.font.family};
  font-size: 16px;
`;

const Container = styled.div`
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 20px;
  padding: 5px 10px;
`;