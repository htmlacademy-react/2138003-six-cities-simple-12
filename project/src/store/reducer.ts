import { createReducer } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { cities } from '../const';
=======
import { cities } from '../types/city';
>>>>>>> d95c2611110c99661ce7255ebbd2fd9905522585
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
