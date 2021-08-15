import styled from "styled-components";

type ActionButtonProps = {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
  onClick?: Function;
  primary?: boolean;
  className?: string;
};

const ActionButton = ({children, onClick, primary, className}: ActionButtonProps) => {
  return (
    <ActionButtonWrapper onClick={onClick} primary={primary} className={className}>
      {children}
    </ActionButtonWrapper>
  )
}

export default ActionButton;

const ActionButtonWrapper = styled.button<{primary?: boolean}>`
display: block;
padding: 15px 15px;
color: ${({primary}) => primary ? '#ffffff' : '#F7367D'};
background-color: ${({primary}) => primary ? '#F7367D' : '#fff'};
border-radius: 8px;
line-height: 16px;
align-items: center;
font-family: Roboto;
font-style: normal;
font-weight: bold;
text-align: center;
font-size: 13px;
text-transform: uppercase;
text-decoration: uppercase;
border: none;
letter-spacing: 1.25px;
cursor: pointer;
`;