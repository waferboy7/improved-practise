import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLocation } from '@type/userLocation';

const initialState: UserLocation = {
  lat: null,
  lng: null,
  radius: '0',
  kinds: '',
};

interface SetLocationPayload {
  lat: number;
  lng: number;
}

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<SetLocationPayload>) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    setRadius(state, action: PayloadAction<string>) {
      state.radius = action.payload;
    },
  },
});

export default userLocationSlice.reducer;
export const { setLocation, setRadius } = userLocationSlice.actions;
