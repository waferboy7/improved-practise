import './App.css';

import { router } from '@constants/router';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
