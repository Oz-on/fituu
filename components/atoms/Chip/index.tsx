import { ReactNode } from "react";
import styled from "styled-components";

type ChipProps = {
  children?: ReactNode;
  margin?: string;
};
const Chip = ({ children, margin }: ChipProps) => {
  return <ChipWrapper margin={margin}>{children}</ChipWrapper>;
};

export default Chip;

const ChipWrapper = styled.div<{ margin?: string }>`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  text-transform: uppercase;
  font-size: 10px;
  margin: ${({ margin }) => margin && margin};
`;
