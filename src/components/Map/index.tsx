import 'leaflet/dist/leaflet.css';

import LocationMarker from '@components/LocationMarker';
import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
  const position: LatLngExpression = [55.19280632148635, 30.2037174454355];

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>You are here!</Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
