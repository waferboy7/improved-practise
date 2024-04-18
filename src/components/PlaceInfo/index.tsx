import './style.css';

import { FavoritesImg, noImage, VectorImg } from '@constants/images';
import placesOptions, { allPlaceKinds } from '@constants/placeOptions';
import { Urls } from '@constants/urls';
import { useAppDispath, useAppSelector } from '@hooks/redux-hooks';
import { addFavouritePlace, removeFavoritePlace } from '@store/slices/favoritesSlice/favorites.slice';
import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PlaceInfo: React.FC = () => {
  const { xid } = useParams<{ xid: string }>();
  const { currentPlace, list } = useAppSelector((state) => state.favoritesPlace);
  const dispatch = useAppDispath();

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentPlace) {
      navigate(Urls.search);
    }
  }, []);

  const toggleAddFavoriteButton = () => {
    if (currentPlace) {
      dispatch(addFavouritePlace(currentPlace));
    }
  };

  const toggleRemoveFavoriteButton = () => {
    if (currentPlace) {
      dispatch(removeFavoritePlace(currentPlace.xid));
    }
  };

  const xidsFavoritesPlaces = useMemo(() => [...list.map((place) => place.xid)], [list]);

  const isFavorite = useMemo(() => xidsFavoritesPlaces.find((id) => id === xid), [xidsFavoritesPlaces, xid]);

  const kindIcon = currentPlace?.kinds
    .split(',')
    .filter((kind) => allPlaceKinds.includes(kind))
    .map((kind) => placesOptions.find((place) => place.kind === kind)?.imgSrc);

  return (
    currentPlace && (
      <div className="place-info">
        <Link to={Urls.favourites}>
          <VectorImg />В избранное
        </Link>
        <div className="place-info-block">
          <div className="place-info-image">
            <img src={currentPlace.preview?.source || noImage} alt={currentPlace.preview?.source} />
          </div>
          <div className="place-info-inner">
            <div className="place-kinds">
              {kindIcon?.map((kind) => (
                <img src={kind} alt={kind} key={kind} width="30px" height="30px" />
              ))}
            </div>
            <h3>{currentPlace.name}</h3>
            <p>{currentPlace.wikipedia_extracts?.text || 'Нет описания места'}</p>
            <div className="place-info-buttons">
              {!isFavorite ? (
                <button className="place-info-favorite-button" onClick={toggleAddFavoriteButton}>
                  <FavoritesImg />
                  Добавить в избранное
                </button>
              ) : (
                <button className="place-info-favorite-button on" onClick={toggleRemoveFavoriteButton}>
                  <FavoritesImg />
                  Удалить из избранного
                </button>
              )}
              <button disabled>Маршрут</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PlaceInfo;
