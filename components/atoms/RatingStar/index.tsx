import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: number;
};
const RatingStar = ({ rating }: Props) => {
  return (
    <Rating>
      <span className="number">{rating}</span>
      <Icon as={AiFillStar} />
    </Rating>
  );
};

export default RatingStar;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.rose};
`;

const Icon = styled.i`
  width: 12px;
  height: 12px;
  color: ${({ theme }) => theme.colors.rose};
  margin-bottom: 3px;
`;
