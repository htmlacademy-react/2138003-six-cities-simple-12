import City from '../city/city';
import { cities } from '../../types/city';

export default function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => <li className="locations__item" key={item.name}><City city={item} /></li>)}
    </ul>
  );
}
