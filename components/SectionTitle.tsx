
import styled from 'styled-components';

const H2 = styled.h2`
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  color: #272E39;
`;

type Props = {
  text: string,
};

const SectionTitle = ({text}: Props) => {
  return (<H2>{text}</H2>);
}

export default SectionTitle;