import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

import SideNavElement from "../../atoms/NavElement.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  background: #fff;
`;

const SideNav = () => {
  const { pathname } = useRouter();
  const path = pathname ? pathname.split("/")[1] : "";
  return (
    <Container>
      <SideNavElement
        selected={path == "dashboard"}
        destination={"/dashboard"}
        description={"mój panel"}
      />
      <SideNavElement
        selected={path == "library"}
        destination={"/library/exercises"}
        description={"Biblioteka ćwiczeń"}
      />
    </Container>
  );
};

export default SideNav;
