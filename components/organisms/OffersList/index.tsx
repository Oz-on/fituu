import Offer, {OffersProps} from "../Offer";

type OffersListProps = {
  offers: Array<OffersProps>
};

const OffersList = ({offers}: OffersListProps) => {
  return (
  <>
    {offers.map(offer => <Offer name={offer.name} price={offer.price} description={offer.description}/>)}
  </>
  )

};

export default OffersList;