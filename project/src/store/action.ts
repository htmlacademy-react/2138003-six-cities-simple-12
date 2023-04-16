import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const setActiveCity = createAction<City>('app/setActiveCity');
export const setListOffers = createAction<Offer[]>('app/setListOffers');
export const setSortOffers = createAction<string>('app/setSortOffers');
