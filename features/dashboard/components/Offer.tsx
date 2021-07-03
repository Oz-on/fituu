import styled from 'styled-components';

import Card from '../../../components/Card';

const OfferContainer = styled(Card)`
  width: 85%;
  padding-left: 15px;
  padding-right: 30px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin: 20px 0;
`;

const Text = styled.p`
  margin: 10px 0;
  font-family: Roboto;
  font-style: normal;
  line-height: 24px;
`;

const DataRowTitle = styled(Text)`
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #838999;
`;

const DataRowContent = styled(Text)`
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #272E39;
`;

type Props = {
  name: string,
  price: number,
  description: string,
}

const Offer = ({name, price, description}: Props) => {
  return (
    <OfferContainer>
      <div>
        <DataRowTitle>nazwa oferty:</DataRowTitle>
        <DataRowTitle>cena:</DataRowTitle>
        <DataRowTitle>opis:</DataRowTitle>
      </div>
      <div>
        <DataRowContent>{name}</DataRowContent>
        <DataRowContent>{price}</DataRowContent>
        <DataRowContent>{description}</DataRowContent>
      </div>
    </OfferContainer>
  )
};

export default Offer;
