import './style.css';

import SearchImg from '@assets/img/search.svg?react';
import { FavoritesImg, LogInImg, LogoImg } from '@constants/images';
import { Urls } from '@constants/urls';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSearchButton = () => {
    pathname === Urls.search ? navigate(Urls.main) : navigate(Urls.search);
  };

  const handleFavouritesButton = () => {
    pathname === Urls.favourites ? navigate(Urls.main) : navigate(Urls.favourites);
  };

  return (
    <aside className="sidebar">
      <Link to={Urls.main}>
        <LogoImg />
      </Link>
      <div className="sidebar-menu">
        <div className="sidebar-buttons">
          <button className={`sidebar-search ${pathname === Urls.search && 'on'}`} onClick={handleSearchButton}>
            <SearchImg className="sidebar-search-icon" />
          </button>
          <button className={`sidebar-favorites ${pathname === Urls.favourites && 'on'}`} onClick={handleFavouritesButton}>
            <FavoritesImg className="sidebar-favorites-icon" />
          </button>
        </div>
        <button className="sidebar-login">
          <LogInImg />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
