import styled from "styled-components";
import SideNav from "../../SideNav";
import MainTemplate from "../Main";

const PanelTemplate = ({ children }) => {
  return (
    <MainTemplate>
      <Wrapper>
        <SideNav />
        <Container>{children}</Container>
      </Wrapper>
    </MainTemplate>
  );
};

export default PanelTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100vw;
  /* height: calc(100vh - 160px); */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  background-color: #f1f4f9;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
