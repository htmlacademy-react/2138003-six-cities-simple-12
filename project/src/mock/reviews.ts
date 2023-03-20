// Аватар автора.
// Имя автора.
// Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
// Дата отзыва в формате: Месяц Год. Например: April 2019.
// Текст отзыва.

import { Review } from '../types/review';
import { AVATAR_URL } from './const';

export const reviews: Review[] = [{
  avatar:{
    src: `${AVATAR_URL}?rnd=${Math.random()}`,
    url: 'qwe'
  },
  name: 'Masha',
  rating: 5,
  date: 'March 2023',
  comment: 'cool!'
},{
  avatar:{
    src: `${AVATAR_URL}?rnd=${Math.random()}`,
    url: 'qwe'
  },
  name: 'Dasha',
  rating: 2,
  date: 'April 2023',
  comment: 'be...'
},{
  avatar:{
    src: `${AVATAR_URL}?rnd=${Math.random()}`,
    url: 'qwe'
  },
  name: 'Pasha',
  rating: 4,
  date: 'May 2023',
  comment: 'ny normalno!'
},{
  avatar:{
    src: `${AVATAR_URL}?rnd=${Math.random()}`,
    url: 'qwe'
  },
  name: 'Sasha',
  rating: 5,
  date: 'May 2023',
  comment: 'cooool hotel chto ya videl!'
}];
