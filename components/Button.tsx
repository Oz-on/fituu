// Here add button component for primary buttons

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 10px 15px;
  background-color: ${props => props.primary ? "#0F35B7" : "#ffffff"};
  color: ${props => props.primary ? "#ffffff" : "#0f35B7"};
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