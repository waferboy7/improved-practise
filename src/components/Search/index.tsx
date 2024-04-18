import './style.css';

import SearchImg from '@assets/img/search.svg?react';
import { useAppDispath, useAppSelector } from '@hooks/redux-hooks';
import { fetchPlaces } from '@store/slices/placesSlice/placesSlice';
import { togglePlace } from '@store/slices/searchSlice/searchSlice';
import { setRadius } from '@store/slices/userLocationSlice/userLocationSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispath();
  const { error, loading } = useAppSelector((state) => state.places);
  const places = useAppSelector((state) => state.search.places);
  const { radius, lat, lng } = useAppSelector((state) => state.userLocation);

  const toggleRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentRadius = Number(e.currentTarget.value);

    if (currentRadius < 0 || Number.isNaN(currentRadius)) {
      dispatch(setRadius(''));
    } else {
      dispatch(setRadius(String(currentRadius)));
    }
  };

  const toggleButton = async () => {
    const kinds = places
      .filter((place) => place.isSelected)
      .map((place) => place.kind)
      .join();

    const queryRadius = radius === '' ? '0' : `${Number(radius) * 1000}`;

    await dispatch(fetchPlaces({ kinds, lat, lng, radius: queryRadius }));
  };

  return (
    <div className="search">
      <input className="search-input" type="text" name="place" id="place" placeholder="Место, адрес..." disabled />
      <div className="kinds">
        <h3>Искать:</h3>
        <ul className="search-kind-list">
          {places.map((place) => (
            <li
              onClick={() => {
                dispatch(togglePlace(place));
              }}
              key={place.kind}
              className={place.isSelected ? '' : 'no-selected'}
            >
              <img src={place.imgSrc} alt={place.kind} />
              <span>{place.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="radius">
        <h3>В радиусе</h3>
        <div>
          <input type="number" name="radius" id="radius" value={radius} onChange={toggleRadius} placeholder="km" />
          <span>км</span>
        </div>
      </div>
      {error && <h3>Произошла ошибка</h3>}
      {loading ? (
        <button className="search-button" onClick={toggleButton} disabled>
          Загрузка
        </button>
      ) : (
        <button className="search-button" onClick={toggleButton}>
          <SearchImg />
        </button>
      )}
    </div>
  );
};

export default Search;
