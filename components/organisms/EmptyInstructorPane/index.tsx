import styled from "styled-components";

const EmptyInstructorPane = () => {
  return (
    <Card>
      <p className={"title"}>brak trenera</p>
      <p className={"description"}>Obecnie nie masz przypisanego żadnego trenera. Napisz do swojego trenera aby dodał cię do listy swoich podopiecznych.</p>
    </Card>
  );
};

export default EmptyInstructorPane;

const Card = styled.div`
  width: 100%;
  min-height: 160px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding: 10px 10px;
  box-sizing: border-box;

  p {
    font-family: Roboto;
  }

  .title, .description {
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #838999;

    text-align: center;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
  }

  .description {
    font-size: 12px;
    line-height: 1.5em;
  }

  @media screen and (min-width: 1008px) {
    width: 40%;

    .title, .description {
      text-align: left;
    }
  }
`;
