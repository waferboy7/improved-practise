import 'leaflet/dist/leaflet.css';

import LocationMarker from '@components/LocationMarker';
import { VITE_TILE_LAYER_URL } from '@constants/index';
import { LatLngExpression } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

const Map: React.FC = () => {
  const [center, setCenter] = useState<LatLngExpression>([53.9, 27.5667]);

  useEffect(() => {
    const fetchUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={10} zoomControl={false} >
        <LocationMarker />
        <ZoomControl position='topright'/>
        <TileLayer url={VITE_TILE_LAYER_URL} />
      </MapContainer>
    </div>
  );
};

export default Map;
