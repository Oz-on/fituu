import styled from "styled-components";

type CardProps = {
  avatar?: string;
  name?: string;
  rating?: number;
  location?: string;
  categories: { id: string; name: string }[] | undefined;
};

const Card = ({}: CardProps) => {
  return <></>;
};

export default Card;

const Container = styled.div``;
