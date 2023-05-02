import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthorizationStatus } from '../const';

export const setActiveCity = createAction<City>('app/setActiveCity');
export const setListOffers = createAction<Offer[]>('app/setListOffers');
export const setSortOffers = createAction<string>('app/setSortOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setError = createAction<string | null>('offers/setError');
export const setEmail = createAction<string | null>('login/setEmail');
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
export const loadComments = createAction<Comment[]>('comments/addComments');
export const setCommentDataLoadingStatus = createAction<boolean>('data/setCommentDataLoadingStatus');
