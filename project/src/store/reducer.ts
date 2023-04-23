import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { setActiveCity, setListOffers, setSortOffers, loadOffers, requireAuthorization, setError, setEmail } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { sorting, AuthorizationStatus } from '../const';

type typeState = {
  city: City;
  offers: Offer[];
  select: string;
  isOffersLoaded: boolean;
  authorizationStatus: string;
  error: string | null;
  email: string | null;
}

const initialState: typeState = {
  city: cities[0],
  offers: [],
  select: sorting.popular,
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  email: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setListOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOffers, (state, action) => {
      state.select = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    });
});
