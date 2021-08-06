import React from "react";
// import Link from "next/Link";
import styled from "styled-components";

import SideNavElement from "./SideNavElement";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px 0 40px;
  background: #fff;
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
