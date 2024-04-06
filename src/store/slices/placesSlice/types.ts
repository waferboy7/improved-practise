import { Places } from "@type/places";

export interface PlaceState {
    list: Places[];
    loading: boolean;
    error: string | null;
  }
  
  export interface FetchPlacesArguments {
    radius: string;
    lat: number;
    lon: number;
  }
  