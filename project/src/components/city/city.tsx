import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';
import { City } from '../../types/city';

type Props = {
  city:City;
}

export default function City({ city }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.name);

  return (
    <a className={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`} href="/#" onClick={() => dispatch(setActiveCity(city))}>
      <span>{city.name}</span>
    </a>
  );
}
