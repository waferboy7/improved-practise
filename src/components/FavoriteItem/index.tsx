import './style.css';

import { FavoritesImg, noImage, VectorImg } from '@constants/images';
import { Urls } from '@constants/urls';
import { useAppDispath, useAppSelector } from '@hooks/redux-hooks';
import { removeFavoritePlace, setCurrentPlace } from '@store/slices/favoritesSlice/favorites.slice';
import { useNavigate } from 'react-router-dom';

import FavoriteItemProps from './types';

const FavoriteItem: React.FC<FavoriteItemProps> = ({ place }) => {
  const { loading } = useAppSelector((state) => state.favoritesPlace);

  const dispatch = useAppDispath();

  const navigate = useNavigate();

  const toggleRemoveButton = () => {
    dispatch(removeFavoritePlace(place.xid));
  };

  const toggleInfoButton = () => {
    dispatch(setCurrentPlace(place.xid));

    navigate(Urls.place.replace(':xid', place.xid));
  };

  return (
    <li key={place.xid} className="favorite-item">
      <header className="favorite-place-header">
        <div className="favorite-place-image-block">
          <img className="favorite-place-image" src={place.preview?.source || noImage} alt="place-image" />
        </div>
        <h3>{place.name}</h3>
      </header>
      <main className="favorite-place-main">
        <p>{place.wikipedia_extracts?.text || 'Нет описания'}</p>
        <div className="favorite-place-buttons">
          <button onClick={toggleRemoveButton}>
            <FavoritesImg fill="#C75E5E" />
          </button>
          <button onClick={toggleInfoButton} disabled={loading}>
            <VectorImg fill="#373737" />
          </button>
        </div>
      </main>
    </li>
  );
};

export default FavoriteItem;
