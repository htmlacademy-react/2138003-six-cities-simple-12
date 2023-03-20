// Фотографии. Выводится до 6-ти изображений.
// Заголовок. Краткое описание предложения, например: «Beautiful & luxurious studio at great location».
// Подробное описание.
// Премиальность.
// Тип жилья. Одно из предопределённых значений: apartment (Apartment), room (Private Room), house (House), hotel (Hotel).
// Рейтинг. Оценка предложения отображается в виде закрашенных звезд и среднего балла (например, 4.8). Максимальное количество звёзд — 5.
// Количество спален. Например, 3 Bedrooms.
// Максимальное количество гостей. Например, Max 4 adults.
// Стоимость аренды за ночь. Сумма всегда отображается в евро.
// Список бытовых предметов в квартире (Wifi, Heating, Kitchen, Cable TV и т. д.);
// Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.

import { Offer } from '../types/offer';
import { AVATAR_URL } from './const';

export const offers: Offer[] = [{
  id: 1,
  photos: [{
    src: 'qwe',
    url: 'qwe'
  }],
  title: 'qwe',
  description: 'qwe',
  premium: true,
  typeHousing: 'Apartament',
  rating: 5,
  bedrooms: 2,
  adults: 2,
  price: 123,
  options: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
  owner: {
    avatar: {
      src: `${AVATAR_URL}?rnd=${Math.random()}`,
      url: 'qwe'
    },
    name: 'Vanya',
    pro: true
  }
},{
  id: 2,
  photos: [{
    src: 'asd',
    url: 'asd'
  }],
  title: 'asd',
  description: 'asd',
  premium: true,
  typeHousing: 'Private Room',
  rating: 4,
  bedrooms: 1,
  adults: 2,
  price: 234,
  options: ['Wifi', 'Heating', 'Kitchen'],
  owner: {
    avatar: {
      src: `${AVATAR_URL}?rnd=${Math.random()}`,
      url: 'asd'
    },
    name: 'Katya',
    pro: false
  }
},{
  id: 3,
  photos: [{
    src: 'zxc',
    url: 'zxc'
  }],
  title: 'zxc',
  description: 'zxc',
  premium: false,
  typeHousing: 'House',
  rating: 3,
  bedrooms: 3,
  adults: 4,
  price: 345,
  options: ['Heating', 'Kitchen'],
  owner: {
    avatar: {
      src: `${AVATAR_URL}?rnd=${Math.random()}`,
      url: 'asd'
    },
    name: 'Petya',
    pro: true
  }
},{
  id: 4,
  photos: [{
    src: 'rty',
    url: 'rty'
  }],
  title: 'rty',
  description: 'rty',
  premium: false,
  typeHousing: 'Hotel',
  rating: 3.5,
  bedrooms: 1,
  adults: 2,
  price: 110,
  options: ['Kitchen'],
  owner: {
    avatar: {
      src: `${AVATAR_URL}?rnd=${Math.random()}`,
      url: 'rty'
    },
    name: 'Kolya',
    pro: false
  }
}];
