import 'leaflet/dist/leaflet.css';

import LocationMarker from '@components/LocationMarker';
import { MINSK_COORDINATES } from '@constants/coordinate';
import { VITE_TILE_LAYER_URL } from '@constants/index';
import { useAppSelector } from '@hooks/redux-hooks';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

const Map: React.FC = () => {
  const places = useAppSelector((state) => state.places);

  return (
    <div className="leaflet-container">
      <MapContainer center={MINSK_COORDINATES} zoom={10} zoomControl={false}>
        <LocationMarker />
        {places.list.length > 0 &&
          places.list.map((place) => (
            <Marker key={place.xid} position={[place.point.lat, place.point.lon]}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        <ZoomControl position="topright" />
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
