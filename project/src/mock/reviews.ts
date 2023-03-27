import { Review } from '../types/review';
import { AVATAR_URL } from './const';

export const reviews: Review[] = [{
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Masha',
  rating: 5,
  date: 'March 2023',
  comment: 'cool!'
},{
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Dasha',
  rating: 2,
  date: 'April 2023',
  comment: 'be...'
},{
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Pasha',
  rating: 4,
  date: 'May 2023',
  comment: 'ny normalno!'
}];
