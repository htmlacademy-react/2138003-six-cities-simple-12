import { Offer } from '../../types/offer';
import { sorting } from '../../const';

export function sortingOffers(offers:Offer[], sortType:string){
  const sortOffers = [...offers];

  switch(sortType){
    case sorting.high:
      sortOffers.sort((a, b) => b.price - a.price);
      break;
    case sorting.low:
      sortOffers.sort((a, b) => a.price - b.price);
      break;
    case sorting.top:
      sortOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return sortOffers;
}
