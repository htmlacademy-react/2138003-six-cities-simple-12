import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import { Location, Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type Props = {
  location: Location;
  offers: Offer[];
  selectedOffer: Offer | undefined;
}

const URL_MARKER_DEFAULT = './img/pin.svg';
const URL_MARKER_CURRENT = './img/pin-active.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

export default function Map({ location, offers, selectedOffer }: Props) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((item) => {
        leaflet
          .marker({
            lat: item.location.latitude,
            lng: item.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && item.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className="cities__map map" style={{ width: '100%' }} ref={mapRef}></section>
  );
}
