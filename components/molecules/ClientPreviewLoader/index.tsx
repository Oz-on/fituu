import styled from "styled-components";

const ClientPreviewLoader = () => {
  return (<ClientBarWrapper data-testID={"clientPreviewLoader"}/>);
};

export default ClientPreviewLoader;

const ClientBarWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  margin-bottom: 10px;

  height: 65px;
  animation: glow 1s infinite;

  @keyframes glow {
    from {
      opacity: 1;
      background-color: #fff;
    }
    to {
      opacity: 0.5;
      background-color: #b2bec3;
    }
  }
`;