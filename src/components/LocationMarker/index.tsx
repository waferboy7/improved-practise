import './style.css';

import { LocationImg } from '@constants/images';
import { useAppDispath, useAppSelector } from '@hooks/redux-hooks';
import { setLocation } from '@store/slices/userLocationSlice/userLocationSlice';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const LocationMarker: React.FC = () => {
  const dispatch = useAppDispath();
  const { lat, lng } = useAppSelector((state) => state.userLocation);

  const map = useMapEvents({
    locationfound(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      dispatch(setLocation({ lat, lng }));

      map.flyTo(e.latlng, 16);
    },
  });

  const handleLocateButtonClick = () => {
    map.locate();
  };

  return (
    <>
      {lat !== null && lng !== null && (
        <Marker position={{ lat, lng }}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <button className="locate-button" onClick={handleLocateButtonClick}>
        <LocationImg />
        {/* <img src={locationImg} alt="locationImg" /> */}
      </button>
    </>
  );
};

export default LocationMarker;
