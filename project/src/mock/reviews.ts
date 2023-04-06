import { Review } from '../types/review';
import { AVATAR_URL } from './const';

export const reviews: Review[] = [{
  id: 1,
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Masha',
  rating: 5,
  date: 'Thu Apr 05 2023 01:03:30 GMT+0300 (Волгоград, стандартное время)',
  comment: 'cool!'
},{
  id: 2,
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Dasha',
  rating: 2,
  date: 'Thu Apr 01 2022 01:03:30 GMT+0300 (Волгоград, стандартное время)',
  comment: 'be...'
},{
  id: 3,
  avatar:`${AVATAR_URL}?rnd=${Math.random()}`,
  name: 'Pasha',
  rating: 4,
  date: 'Wed Apr 06 2023 01:03:30 GMT+0300 (Волгоград, стандартное время)',
  comment: 'ny normalno!'
}];
