import './style.css';

import { favoritesImg, logInImg, logoImg, searchImg } from '@constants/images';
import { Urls } from '@constants/urls';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchButton = () => {
    navigate(Urls.search);
  };

  const handleFavouritesButton = () => {
    navigate(Urls.favourites);
  };

  return (
    <aside className="sidebar">
      <Link to={Urls.main}>
        <img src={logoImg} alt="logo" />
      </Link>
      <div className="sidebar-menu">
        <div className="sidebar-buttons">
          <button onClick={handleSearchButton}>
            <img src={searchImg} alt="search" />
          </button>
          <button onClick={handleFavouritesButton}>
            <img src={favoritesImg} alt="favorites" />
          </button>
        </div>
        <button>
          <img src={logInImg} alt="login" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
