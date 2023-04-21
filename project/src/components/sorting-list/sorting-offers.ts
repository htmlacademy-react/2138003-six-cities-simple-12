import { Offer } from '../../types/offer';
import { sorting } from '../../const';

export function sortOffers(offers:Offer[], sortType:string){
  const sortedOffers = [...offers];

  switch(sortType){
    case sorting.high:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case sorting.low:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case sorting.top:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return sortedOffers;
}
