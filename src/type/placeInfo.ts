import { Point } from './places';

export interface Address {
  country: string;
  state: string;
  city: string;
  city_district?: string;
  road?: string;
  pedestrian?: string;
  house_district?: string;
}

export default interface PlaceInfo {
  xid: string;
  name: string;
  address: Address;
  preview?: {
    source?: string;
  };
  kinds: string;
  url?: string;
  wikipedia_extracts?: {
    title: string;
    text: string;
  };
  point: Point;
}
