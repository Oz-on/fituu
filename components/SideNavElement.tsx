import React from 'react';
import Link from 'Next/Link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${(props) => props.selected ?'#0F35B7' : '#272E39'};
  font-family: Roboto;
  margin-bottom: 20px;
  text-transform: uppercase;
`;


const SideNavElement = ({description, destination}) => {
  return (
    <Link href={destination}>
      <StyledLink>{description}</StyledLink>
    </Link>
  );
};

export default SideNavElement;