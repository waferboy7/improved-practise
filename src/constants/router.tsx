import Favourites from '@components/Favourites';
import Map from '@components/Map';
import Search from '@components/Search';
import Sidebar from '@components/Sidebar';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import { Urls } from './urls';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Sidebar />
        <Outlet />
        <Map />
      </>
    ),

    children: [
      {
        path: Urls.main,
        element: <></>,
      },
      {
        path: Urls.search,
        element: <Search />,
      },
      {
        path: Urls.favourites,
        element: <Favourites />,
      },
    ],
  },
]);
