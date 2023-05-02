import { Offer } from './types/offer';
import { sorting } from './const';
import { Comment } from './types/comment';

export function isPassValid(password:string){
  if(password.search(/[A-Za-z]/) === -1){
    return false;
  }
  if(password.search(/[0-9]/) === -1){
    return false;
  }
  return true;
}

export function formatDate(date: string) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
  };
  const yearMonth = new Date(date).toLocaleDateString('en-US', dateOptions);
  const fullDate = new Date(date).toISOString().slice(0,10);
  return {
    yearMonth,
    fullDate
  };
}

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

export function pro(host:boolean) {
  if (host){
    return '--pro';
  }
  return '';
}

export function sortComment(comment:Comment[]){
  return [...comment].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  }).slice(0, 10);
}
