import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CitiesList from '../../components/cities-list/cities-list';
import SortingForm from '../../components/sorting-list/sorting-list';
import { sortOffers } from '../../components/sorting-list/sorting-offers';
import { fetchOfferAction } from '../../store/api-actions';

export default function MainPage() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = useAppSelector(() => allOffers.filter((offer) => offer.city.name === currentCity.name));
  const sortType = useAppSelector((state) => state.select);

  useEffect(() => {
    dispatch(fetchOfferAction());
  }, [dispatch]);

  const onOfferHover = (offerId: number | null) => {
    const currentOffer = currentOffers.find((item) => item.id === offerId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <SortingForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offersList={sortOffers(currentOffers, sortType)} onOfferHover={onOfferHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map location={currentCity.location} selectedOffer={selectedOffer} offers={currentOffers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
