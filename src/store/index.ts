import { combineReducers, configureStore } from '@reduxjs/toolkit';

import favoritesSlice from './slices/favoritesSlice/favorites.slice';
import placesSlice from './slices/placesSlice/placesSlice';
import searchSlice from './slices/searchSlice/searchSlice';
import userLocationSlice from './slices/userLocationSlice/userLocationSlice';

const rootReducer = combineReducers({
  places: placesSlice,
  search: searchSlice,
  userLocation: userLocationSlice,
  favoritesPlace: favoritesSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
