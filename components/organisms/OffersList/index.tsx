import Offer, {OfferProps} from "../Offer";

export type OffersListProps = {
  offers: Array<OfferProps>
};

const OffersList = ({offers}: OffersListProps) => {
  return (
  <>
    {offers.map(offer => <Offer name={offer.name} price={offer.price} description={offer.description}/>)}
  </>
  )

};

export default OffersList;