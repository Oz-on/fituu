
import styled from "styled-components";

type SectionTitleProps = {
  children: string,
};

const SectionTitle = ({children}: SectionTitleProps) => {
  return (<SectionTitleWrapper>{children}</SectionTitleWrapper>);
}

export default SectionTitle;

const SectionTitleWrapper = styled.h2`
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  color: #272E39;
`;