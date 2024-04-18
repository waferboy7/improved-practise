import './style.css';

import PlaceIcons from '@constants/placeIcons';
import { allPlaceKinds } from '@constants/placeOptions';
import { Urls } from '@constants/urls';
import { useAppDispath, useAppSelector } from '@hooks/redux-hooks';
import { fetchPlaceInfoById } from '@store/slices/favoritesSlice/favorites.slice';
import { Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const PlaceMarkers: React.FC = () => {
  const places = useAppSelector((state) => state.places.list);
  const { loading } = useAppSelector((state) => state.favoritesPlace);
  const dispatch = useAppDispath();

  const navigate = useNavigate();

  const toggleButton = async (xid: string) => {
    await dispatch(fetchPlaceInfoById(xid));

    navigate(Urls.place.replace(':xid', xid));
  };

  return (
    places.length > 0 &&
    places.map((place) => {
      const kindPlace = place.kinds.split(',').filter((kind) => allPlaceKinds.includes(kind))[0];

      const icon = PlaceIcons[kindPlace];

      return (
        <Marker key={place.xid} position={[place.point.lat, place.point.lon]} icon={icon}>
          <Popup>
            <div className="mini-place-info">
              <p>{place.name}</p>
              <button className="about-place-button" onClick={() => toggleButton(place.xid)} disabled={loading}>
                Подробнее
              </button>
            </div>
          </Popup>
        </Marker>
      );
    })
  );
};

export default PlaceMarkers;
