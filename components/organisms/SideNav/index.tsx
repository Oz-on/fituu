import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

import SideNavElement from "../../atoms/NavElement.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 10px;
  background: #fff;
`;

const SideNav = () => {
  const { pathname } = useRouter();
  const pathElements = pathname ? pathname.split("/") : [];
  const path = pathElements.length > 0 ? pathElements[pathElements.length - 1] : "";
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
    </Container>
  );
};

export default SideNav;
