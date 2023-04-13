import City from '../city/city';
import { citiesNames } from '../../types/city';

export default function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((item) => <li className="locations__item" key={item.name}><City city={item} /></li>)}
    </ul>
  );
}
