import { Offer } from '../../types/offer';
import Premium from '../premium/premium';
import { ratingScale } from '../const';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

type OfferPageProps = {
  offer: Offer;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}

function OfferCard ({offer, onMouseEnter, onMouseLeave}: OfferPageProps) {
  const { id, title, isPremium, price, rating, type, previewImage } = offer;

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={onMouseLeave}
    >
      {Premium(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room.replace(/:id/, `${id}`)}`} key={id}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place interior" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingScale(rating) }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room.replace(/:id/, `${id}`)}`} key={id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
