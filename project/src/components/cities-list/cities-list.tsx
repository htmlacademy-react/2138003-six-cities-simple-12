import CityComponent from '../city/city';
import { cities } from '../../const';

export default function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => <li className="locations__item" key={item.name}><CityComponent city={item} /></li>)}
    </ul>
  );
}
