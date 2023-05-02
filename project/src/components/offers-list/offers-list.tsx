import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks';

type Props = {
  offersList: Offer[];
  onOfferHover?: (offerId: number | null) => void;
}

export default function OffersList({ offersList, onOfferHover }: Props) {
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  const mouseEnter = (id:number) => {
    onOfferHover?.(id);
  };

  const mouseLeave = () => {
    onOfferHover?.(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {isOffersLoaded ?
        <Spinner /> :
        offersList.map((item) => <OfferCard key={item.id} offer={item} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />)}
    </div>
  );
}
