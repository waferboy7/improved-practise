import './style.css';

import FavoriteItem from '@components/FavoriteItem';
import { useAppSelector } from '@hooks/redux-hooks';

const Favourites: React.FC = () => {
  const favoritesPlaces = useAppSelector((state) => state.favoritesPlace.list);

  return (
    <div className="favorites">
      <input className="favorites-input" type="text" placeholder="Место, адрес..." disabled />
      <h3>Избранное:</h3>
      {favoritesPlaces.length > 0 ? (
        <ul className="favorites-place-list">
          {favoritesPlaces.map((place) => (
            <FavoriteItem place={place} />
          ))}
        </ul>
      ) : (
        <span>Избранных мест нет</span>
      )}
    </div>
  );
};

export default Favourites;
