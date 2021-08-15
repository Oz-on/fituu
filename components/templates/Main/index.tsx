import styled from "styled-components";
import Header from "../../Header";
import Footer from "../../organisms/Footer";

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
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
