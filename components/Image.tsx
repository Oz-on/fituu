import Image from 'next/image';
import styled from 'styled-components';

const StyledImg = styled(Image)`
  border-radius: 10px;
`;

type Props = {
  source: string,
  width: string | number,
  height: string | number,
};

const Img = ({source, width, height}: Props) => {
  return (
    <StyledImg src={source} width={width} height={height} />
  );
}

export default Img;