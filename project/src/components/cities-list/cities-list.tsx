<<<<<<< HEAD
import CityComponent from '../city/city';
import { cities } from '../../const';
=======
import City from '../city/city';
import { cities } from '../../types/city';
>>>>>>> d95c2611110c99661ce7255ebbd2fd9905522585

export default function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
<<<<<<< HEAD
      {cities.map((item) => <li className="locations__item" key={item.name}><CityComponent city={item} /></li>)}
=======
      {cities.map((item) => <li className="locations__item" key={item.name}><City city={item} /></li>)}
>>>>>>> d95c2611110c99661ce7255ebbd2fd9905522585
    </ul>
  );
}
