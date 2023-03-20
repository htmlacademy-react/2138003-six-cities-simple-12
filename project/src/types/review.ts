import { Photo } from './photo';

export type Review = {
  avatar: Photo;
  name: string;
  rating: number;
  date: string;
  comment: string;
}
