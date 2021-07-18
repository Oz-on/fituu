import styled from "styled-components";

const Img = styled.img`
  border-radius: 10px;
`;

type Props = {
  source: string;
  width?: string | number;
  height?: string | number;
};

const Image = ({ source, width, height }: Props) => {
  return <Img src={source} />;
};

export default Image;
