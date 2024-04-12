import { Icon } from 'leaflet';

import placesOptions, { allPlaceKinds } from './placeOptions';

const PlaceIcons: Record<string, Icon> = allPlaceKinds.reduce((acc, kind) => {
  const url = placesOptions.find((place) => place.kind === kind)?.imgSrc;

  if (url) {
    acc[kind] = new Icon({
      iconUrl: url,
      iconSize: [30, 30],
    });
  }

  return acc;
}, {} as Record<string, Icon>);

export default PlaceIcons;
