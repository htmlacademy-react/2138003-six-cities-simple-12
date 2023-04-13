import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { setActiveCity, setListOffers } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';

type typeState = {
  city: City;
  offers: Offer[];
}

const initialState: typeState = {
  city: cities[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setListOffers, (state, action) => {
      state.offers = action.payload;
    });
});
