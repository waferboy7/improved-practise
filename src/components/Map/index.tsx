import 'leaflet/dist/leaflet.css';

import LocationMarker from '@components/LocationMarker';
import PlaceMarkers from '@components/PlaceMarkers';
import { MINSK_COORDINATES } from '@constants/coordinate';
import { VITE_TILE_LAYER_URL } from '@constants/index';
import { Urls } from '@constants/urls';
import { useAppSelector } from '@hooks/redux-hooks';
import React from 'react';
import { Circle, MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

const Map: React.FC = () => {
  const { pathname } = useLocation();

  const { radius, lat, lng } = useAppSelector((state) => state.userLocation);
  return (
    <div className="leaflet-container">
      <MapContainer center={MINSK_COORDINATES} zoom={10} zoomControl={false}>
        <LocationMarker />
        {lat !== null && lng !== null && radius !== '0' && pathname === Urls.search && (
          <Circle center={[lat, lng]} radius={Number(radius) * 1000} />
        )}
        <PlaceMarkers />
        <ZoomControl position="topright" />
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
