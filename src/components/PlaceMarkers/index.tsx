import PlaceIcons from '@constants/placeIcons';
import { allPlaceKinds } from '@constants/placeOptions';
import { useAppSelector } from '@hooks/redux-hooks';
import { Marker, Popup } from 'react-leaflet';

const PlaceMarkers: React.FC = () => {
  const places = useAppSelector((state) => state.places.list);

  return (
    places.length > 0 &&
    places.map((place) => {
      const kindPlace = place.kinds.split(',').filter((kind) => allPlaceKinds.includes(kind))[0];

      const icon = PlaceIcons[kindPlace];

      return (
        <Marker key={place.xid} position={[place.point.lat, place.point.lon]} icon={icon}>
          <Popup>{place.name}</Popup>
        </Marker>
      );
    })
  );
};

export default PlaceMarkers;
