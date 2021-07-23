import React from "react";
import styled from "styled-components";

import SideNavElement from "../../atoms/NavElement.tsx";

const Nav = () => {
  return (
    <NavWrapper>
      <SideNavElement 
        destination={"/dashboard"} 
        description={"mój panel"} 
      />
      <SideNavElement
        destination={"/dashboard/my-data"}
        description={"moje dane"}
      />
      <SideNavElement
        destination={"/dashboard/clients"}
        description={"klienci"}
      />
      <SideNavElement
        destination={"/dashboard/messages"}
        description={"wiadomosći"}
      />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 40px;
  background: #fff;
`;

export default Nav;
