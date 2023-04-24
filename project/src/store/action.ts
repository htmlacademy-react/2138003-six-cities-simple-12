import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const setActiveCity = createAction<City>('app/setActiveCity');
export const setListOffers = createAction<Offer[]>('app/setListOffers');
export const setSortOffers = createAction<string>('app/setSortOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('login/changeAuthorizationStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setError = createAction<string | null>('offers/setError');
export const setEmail = createAction<string | null>('login/setEmail');
