import './style.css';

import { locationImg } from '@constants/images';
import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 16);
    },
  });

  const handleLocateButtonClick = () => {
    map.locate();
  };

  return (
    <>
      {position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <button className="locate-button" onClick={handleLocateButtonClick}>
        <img src={locationImg} alt="locationImg" />
      </button>
    </>
  );
};

export default LocationMarker;
