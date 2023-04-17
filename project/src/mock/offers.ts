import { Offer } from '../types/offer';
import { reviews } from './reviews';
import { AVATAR_URL } from './const';
import { Location } from '../types/offer';

export const location: Location = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10,
};

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 100,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    reviews: reviews
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Neo'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 150,
    rating: 0.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    reviews: reviews
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    reviews: reviews
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Neo'
    },
    id: 4,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 200,
    rating: 0.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    reviews: reviews
  },{
    bedrooms: 10,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Dusseldorf'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 5,
      isPro: true,
      name: 'Angelina'
    },
    id: 5,
    images: [
      'img/1.png'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious',
    type: 'apartment',
    reviews: reviews
  },
  {
    bedrooms: 10,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Brussels'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 6,
      isPro: true,
      name: 'Angelina'
    },
    id: 6,
    images: [
      'img/1.png'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious',
    type: 'apartment',
    reviews: reviews
  }
];
