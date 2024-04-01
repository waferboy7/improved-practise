import './App.css';

import Map from '@components/Map';
import Sidebar from '@components/Sidebar';

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Map />
    </>
  );
}

export default App;
