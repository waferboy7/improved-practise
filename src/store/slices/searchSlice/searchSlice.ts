import placesOptions, { PlaceOptions } from '@constants/placeOptions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchPlace {
  places: PlaceOptions[];
}

interface ActionTogglePlace {
  kind: string;
}

const initialState: SearchPlace = {
  places: placesOptions,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    togglePlace(state, action: PayloadAction<ActionTogglePlace>) {
      const toggledPlace = state.places.find((place) => place.kind === action.payload.kind);

      if (toggledPlace) {
        toggledPlace.isSelected = !toggledPlace.isSelected;
      }
    },
  },
});

export default searchSlice.reducer;
export const { togglePlace } = searchSlice.actions;
