import React from "react";
// import Link from "next/Link";
import styled from "styled-components";

import SideNavElement from "./SideNavElement";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 40px;
  background: #f1f4f9;
`;

const SideNav = () => {
  return (
    <Container>
      <SideNavElement destination={"/dashboard"} description={"mój panel"} />
      <SideNavElement
        destination={"/dashboard/mydata"}
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
    </Container>
  );
};

export default SideNav;
