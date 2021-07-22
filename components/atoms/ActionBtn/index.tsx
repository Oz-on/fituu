import styled from "styled-components";

import Button from "../Button";

type ActionButtonProps = {
  children: React.ReactNode;
  onClick: Function;
};

const ActionButton = ({children, onClick}: ActionButtonProps) => {
  return (
    <ActionButtonWrapper onClick={onClick}>
      {children}
    </ActionButtonWrapper>
  )
}

export default ActionButton;

const ActionButtonWrapper = styled(Button)`
color: #F7367D;
text-decoration: underline;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 11px;
line-height: 16px;
cursor: pointer;
`;