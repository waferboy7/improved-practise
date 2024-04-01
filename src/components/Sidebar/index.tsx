import './style.css';

import favoritesImg from '@assets/img/favorites.svg';
import logInImg from '@assets/img/logIn.svg';
import logoImg from '@assets/img/logo.svg';
import searchImg from '@assets/img/search.svg';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <a href="">
        <img src={logoImg} alt="logo" />
      </a>
      <div className="sidebar-menu">
        <div className='sidebar-buttons'>
          <button>
            <img src={searchImg} alt="search" />
          </button>
          <button>
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
