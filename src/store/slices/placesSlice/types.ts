import { Places } from '@type/places';

export interface PlaceState {
  list: Places[];
  loading: boolean;
  error: string | null;
}
