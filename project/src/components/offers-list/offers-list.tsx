import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type Props = {
  offersList: Offer[];
  onOfferHover?: (offerId: number | null) => void;
}

export default function OffersList({ offersList, onOfferHover }: Props) {

  const mouseEnter = (id:number) => {
    onOfferHover?.(id);
  };

  const mouseLeave = () => {
    onOfferHover?.(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => <OfferCard key={item.id} offer={item} mouseEnter={mouseEnter} mouseLeave={mouseLeave} />)}
    </div>
  );
}
