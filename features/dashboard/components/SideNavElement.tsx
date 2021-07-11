import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${(props) => props.selected ?'#0F35B7' : '#272E39'};
  font-family: Roboto;
  margin-bottom: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

type Props = {
  description: string,
  destination: string,
  selected: boolean,
};

const SideNavElement = ({description, destination, selected}: Props) => {
  return (
    <Link href={destination}>
      <StyledLink selected={selected}>{description}</StyledLink>
    </Link>
  );
};

export default SideNavElement;