import { useAppDispath } from '@hooks/redux-hooks';
import { fetchPlaces } from '@store/slices/placesSlice/placesSlice';
import { FetchPlacesArguments } from '@store/slices/placesSlice/types';

const Search: React.FC = () => {
  const dispatch = useAppDispath();

  const fetch: FetchPlacesArguments = {
    radius: '1000',
    lat: 55.48255,
    lon: 28.76119,
  };

  const toggleButton = async () => {
    await dispatch(fetchPlaces(fetch));
  };

  return (
    <div>
      Search
      <button onClick={toggleButton}>get</button>
    </div>
  );
};

export default Search;
