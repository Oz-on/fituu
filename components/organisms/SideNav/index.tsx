import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

import SideNavElement from "../../atoms/NavElement.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 10px;
  background: #fff;
  box-sizing: border-box;
`;

const SideNav = () => {
  const { pathname } = useRouter();
  const path = pathname ? pathname.split("/")[1] : '';
  return (
    <Container>
      <SideNavElement
        selected={path == "dashboard"}
        destination={"/dashboard"}
        description={"mój panel"}
      />
      <SideNavElement
        selected={path == "my-data"}
        destination={"/my-data"}
        description={"moje dane"}
      />
      <SideNavElement
        selected={path == "library"}
        destination={"/library/exercises"}
        description={"Biblioteka ćwiczeń"}
      />
      <SideNavElement
        selected={path === "conversations"}
        destination={"/conversations"}
        description={"Wiadomości"}
      />
    </Container>
  );
};

export default SideNav;
