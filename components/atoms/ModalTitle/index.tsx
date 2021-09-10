import styled from "styled-components";

type Props = {
  children: string;
};

const ModalTitle = ({children}: Props) => {
  return <Title>{children}</Title>;
};

export default ModalTitle;

const Title = styled.h3`
  font-family: ${({theme}) => theme.font.family};
  font-weight: 500;
  font-size: 18px;
  color: #272E39;
  letter-spacing: 1.5px;
  text-align: center;
`;