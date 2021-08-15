import styled from "styled-components";
import Header from "../../organisms/Header/container";
import Footer from "../../organisms/Footer";
import { Session } from "next-auth";

type Props = {
  children: any;
  session: Session;
  alternativeHeader: boolean;
};

const MainTemplate = ({ children, session, alternativeHeader}: Props) => {
  return (
    <Container>
      <Header session={session} alternative={alternativeHeader} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default MainTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  main {
    /* min-height: calc(100vh - 160px); */
  }
`;
