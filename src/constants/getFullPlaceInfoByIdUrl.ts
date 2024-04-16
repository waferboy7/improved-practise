import { VITE_PLACES_API_KEY, VITE_PLACES_INFO_API_URL } from '@constants/index';

function getFullPlaceInfoByIdUrl(xid: string) {
  return `${VITE_PLACES_INFO_API_URL}${xid}?apikey=${VITE_PLACES_API_KEY}`;
}

export default getFullPlaceInfoByIdUrl;
