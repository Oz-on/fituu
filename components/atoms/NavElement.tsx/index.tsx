import React from "react";
import Link from "next/link";
import styled from "styled-components";

type NavElementProps = {
  description: string;
  destination: string;
  selected?: boolean;
}

const NavElement = ({ description, destination, selected }: NavElementProps) => {
  return (
    <Link href={destination}>
      <NavElementWrapper selected={selected}>{description}</NavElementWrapper>
    </Link>
  );
};

export default NavElement;

const NavElementWrapper = styled.a<{selected?: boolean}>`
  color: ${({selected}) => selected ? "#0F35B7" : "#272E39"};
  font-family: Roboto;
  margin-bottom: 20px;
  text-transform: uppercase;
`;