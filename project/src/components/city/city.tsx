import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { City } from '../../types/city';

type Props = {
<<<<<<< HEAD
  city: City;
=======
  city:City;
>>>>>>> d95c2611110c99661ce7255ebbd2fd9905522585
}

export default function CityComponent({ city }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.name);

  return (
    <a className={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`} href="/#" onClick={() => dispatch(setActiveCity(city))}>
      <span>{city.name}</span>
    </a>
  );
}
