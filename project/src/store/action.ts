import { createAction } from '@reduxjs/toolkit';
import { CitiesName } from '../types/city';
import { Offer } from '../types/offer';

export const setActiveCity = createAction<CitiesName>('app/setActiveCity');
export const setListOffers = createAction<Offer[]>('app/setListOffers');
