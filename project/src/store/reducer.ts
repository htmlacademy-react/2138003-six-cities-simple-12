import { createReducer } from '@reduxjs/toolkit';
import { citiesNames } from '../types/city';
import { setActiveCity, setListOffers } from './action';
import { Offer } from '../types/offer';
import { CitiesName } from '../types/city';

type typeState = {
  city: CitiesName;
  offers: Offer[];
}

const initialState: typeState = {
  city: citiesNames[0],
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
