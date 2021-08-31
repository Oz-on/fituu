import styled from "styled-components";

type StatsCardProps = {
  title: string;
  value: number;
};

const StatsCard = ({title, value}: StatsCardProps) => {
  return (
    <StatsCardWrapper>
      <CardStatsTitle>{title}</CardStatsTitle>
      <StatsValue>{value}</StatsValue>
    </StatsCardWrapper>
  );
}

export default StatsCard;

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 8px 1px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding: 10px 10px;
  box-sizing: border-box;
`;

const StatsCardWrapper = styled(Card)`
  margin-right: 30px;
  width: 20%;
  display: flex;
  flex-direction: column;
  max-height: 120px;
  justify-content: space-between;
`;

const CardStatsTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  // line-height: 16px;
  /* or 160% */

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #838999;
`;

const StatsValue = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #272E39;
`;