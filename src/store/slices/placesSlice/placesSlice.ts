import { getFullPlacesUrl } from '@constants/getFullPlacesUrl';
import { Action, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Places } from '@type/places';
import axios, { AxiosError } from 'axios';

import { FetchPlacesArguments, PlaceState } from './types';

export const fetchPlaces = createAsyncThunk<Places[], FetchPlacesArguments, { rejectValue: string }>(
  'places/fetchPlaces',
  async function ({ radius, lat, lon }, { rejectWithValue }) {
    const data = await axios
      .get<Places[]>(getFullPlacesUrl(radius, lat, lon))
      .then((res) => res.data.filter((place) => place.name.trim() !== ''))
      .catch((e: AxiosError) => {
        return rejectWithValue(e.message);
      });

    return data;
  },
);

const initialState: PlaceState = {
  list: [],
  loading: false,
  error: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default placesSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith('rejected');
}
