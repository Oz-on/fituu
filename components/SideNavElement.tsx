import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "#0F35B7" : "#272E39")};
  font-family: Roboto;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 30px;
  font-size: 14px;
  background-color: ${({ selected, theme }) =>
    selected && theme.colors.primary};
  :hover {
    color: #0f35b7;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
type Props = {
  description: string;
  destination: string;
  selected: boolean;
};

const SideNavElement = ({ description, destination, selected }: Props) => {
  return (
    <Link href={destination}>
      <StyledLink selected={selected}>{description}</StyledLink>
    </Link>
  );
};

export default SideNavElement;
