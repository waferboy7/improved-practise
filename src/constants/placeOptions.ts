import { placesImg } from './images';

export interface PlaceOptions {
  label: string;
  imgSrc: string;
  kind: string;
  isSelected: boolean;
}

const placesOptions: PlaceOptions[] = [
  { label: 'Природа', imgSrc: placesImg.natureImg, kind: 'natural', isSelected: false },
  { label: 'Культура', imgSrc: placesImg.cultureImg, kind: 'cultural', isSelected: false },
  { label: 'История', imgSrc: placesImg.historyImg, kind: 'historic', isSelected: false },
  { label: 'Религия', imgSrc: placesImg.religionImg, kind: 'religion', isSelected: false },
  { label: 'Архитектура', imgSrc: placesImg.archtectureImg, kind: 'architecture', isSelected: false },
  { label: 'Индустриальные объекты', imgSrc: placesImg.industrialImg, kind: 'industrial_facilities', isSelected: false },
  { label: 'Разное', imgSrc: placesImg.otherImg, kind: 'other', isSelected: false },
  { label: 'Спорт', imgSrc: placesImg.sportImg, kind: 'sport', isSelected: false },
  { label: 'Еда', imgSrc: placesImg.foodImg, kind: 'restaurants', isSelected: false },
  { label: 'Магазины', imgSrc: placesImg.shopImg, kind: 'shops', isSelected: false },
  { label: 'Кафе', imgSrc: placesImg.coffeeImg, kind: 'cafes', isSelected: false },
  { label: 'Развлечения', imgSrc: placesImg.amusementsImg, kind: 'amusements', isSelected: false },
  { label: 'Банки', imgSrc: placesImg.bankImg, kind: 'banks', isSelected: false },
  { label: 'Места для отдыха', imgSrc: placesImg.hotelsImg, kind: 'accomodations', isSelected: false },
  { label: 'Для взрослых', imgSrc: placesImg.adultImg, kind: 'adult', isSelected: false },
  { label: 'Заправки', imgSrc: placesImg.gasStationImg, kind: 'fuel', isSelected: false },
  { label: 'Прокат велосипедов', imgSrc: placesImg.bicycleImg, kind: 'bicycle_rental', isSelected: false },
  { label: 'Прокат авто', imgSrc: placesImg.carImg, kind: 'car_rental', isSelected: false },
];

export const allPlaceKinds = placesOptions.map((place) => place.kind);

export default placesOptions;
