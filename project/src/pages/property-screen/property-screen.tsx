import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { ratingScale } from '../../components/const';
import { useParams } from 'react-router-dom';
import ErrorPage from '../error-screen/error-screen';
import pro from '../../components/host-pro/host-pro';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';

type OfferProps = {
  offers: Offer[];
}

function Property ({offers}: OfferProps) {
  const { id } = useParams();
  const offer = offers.find((offerId) => offerId.id === Number(id));

  if (!offer) {
    return <ErrorPage/>;
  }

  const { bedrooms, description, goods, host, images, isPremium, maxAdults, price, rating, title, type, city } = offer;
  return (
    <div>
      <Helmet>
        <title>six cities simple: property</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={`${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  Premium
                </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: ratingScale(rating) }}></span>
                  <span className="visually-hidden">{rating}</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={`${good}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper property__avatar-wrapper${pro(host.isPro)} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map location={city.location} offers={offers} selectedOffer={offer}/>
          </section>
          {/* <div className="cities__right-section">
            <Map location={city.location} offers={offers} selectedOffer={offer}/>
          </div> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offersList={offers.slice(0, 3)}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
