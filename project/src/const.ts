import { City } from './types/city';
import { Sorting } from './types/sort';
import { ReviewStar } from './types/reviews-star';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  NearbyOffers = '/hotels/id/nearby',
  OfferComments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CommentFormValue {
  Default = 0,
  MinLength = 50,
  MaxLength = 300,
}

export const cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9333000,
      longitude: 6.9500000,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8504000,
      longitude: 4.3487800,
      zoom: 10,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: 10,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: 10,
    }
  },
];

export const sorting: Sorting = {
  popular: 'Popular',
  low: 'Price: low to high',
  high: 'Price: high to low',
  top: 'Top rated first',
};

export const TIMEOUT_SHOW_ERROR = 2000;

export const starsRating: ReviewStar[] = [
  {
    star:'perfect',
    id: 5
  },
  {
    star:'good',
    id: 4
  },
  {
    star:'not bad',
    id: 3
  },
  {
    star:'badly',
    id: 2
  },
  {
    star:'terribly',
    id: 1
  }
];
