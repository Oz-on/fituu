import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children?: ReactNode;
  onClick?: Function;
  primary?: boolean;
  isLink?: boolean,
};

const Button = ({ children, primary, onClick, isLink }: ButtonProps) => {
  if (isLink) {
    return (
      <LinkWrapper primary={primary}>
        {children}
      </LinkWrapper>
    )
  }
  return (
    <ButtonWrapper 
      primary={primary} 
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{primary?: boolean}>`
  display: block;
  padding: 10px 15px;
  background-color: ${({primary}) => primary ? "#0F35B7" : "#ffffff"};
  color: ${({primary}) => primary ? "#ffffff" : "#0f35B7"};
  border-radius: 8px;
  line-height: 16px;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  letter-spacing: 1.25px;
  cursor: pointer;
`;

const LinkWrapper = styled.a<{primary?: boolean}>`
  display: block;
  width: auto;
  padding: 10px 15px;
  background-color: ${({primary}) => primary ? "#0F35B7" : "#ffffff"};
  color: ${({primary}) => primary ? "#ffffff" : "#0f35B7"};
  border-radius: 8px;
  line-height: 16px;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  letter-spacing: 1.25px;
  cursor: pointer;
`;

export default Button;