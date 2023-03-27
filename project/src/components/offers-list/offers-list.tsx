import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type Props = {
  offersList: Offers[];
}

export default function OffersList({ offersList }: Props) {

  const [, setActualId] = useState<number | null>();

  const mouseEnter = (id:number) => {
    setActualId(id);
  };

  const mouseLeave = () => {
    setActualId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => <OfferCard key={item.id} offers={item} mouseEnter={mouseEnter} mouseLeave={mouseLeave} />)}
    </div>
  );
}
