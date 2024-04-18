export interface Point {
  lon: number;
  lat: number;
}

export interface Places {
  xid: string;
  name: string;
  kinds: string;
  point: Point;
}
