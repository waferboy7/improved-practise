import 'leaflet/dist/leaflet.css';

import LocationMarker from '@components/LocationMarker';
import { MINSK_COORDINATES } from '@constants/coordinate';
import { VITE_TILE_LAYER_URL } from '@constants/index';
import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

const Map: React.FC = () => {
  return (
    <div className="leaflet-container">
      <MapContainer center={MINSK_COORDINATES} zoom={10} zoomControl={false} >
        <LocationMarker />
        <ZoomControl position='topright'/>
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
