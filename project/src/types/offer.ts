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
import { Photo } from './photo';

type Owner = {
  avatar: Photo;
  name: string;
  pro: boolean;
}

export type Offer = {
  id: number;
  photos: Photo[];
  title: string;
  description: string;
  premium: boolean;
  typeHousing: string;
  rating: number;
  bedrooms: number;
  adults: number;
  price: number;
  options: string[];
  owner: Owner;
}
