import { placesImg } from './images';

interface PlaceOptions {
  label: string;
  imgSrc: string;
  kind: string;
}

const placesOptions: PlaceOptions[] = [
  { label: 'Природа', imgSrc: placesImg.natureImg, kind: 'natural' },
  { label: 'Культура', imgSrc: placesImg.cultureImg, kind: 'cultural' },
  { label: 'История', imgSrc: placesImg.historyImg, kind: 'historic' },
  { label: 'Религия', imgSrc: placesImg.religionImg, kind: 'religion' },
  { label: 'Архитектура', imgSrc: placesImg.archtectureImg, kind: 'architecture' },
  { label: 'Индустриальные объекты', imgSrc: placesImg.industrialImg, kind: 'industrial_facilities' },
  { label: 'Разное', imgSrc: placesImg.otherImg, kind: 'other' },
  { label: 'Спорт', imgSrc: placesImg.sportImg, kind: 'sport' },
  { label: 'Еда', imgSrc: placesImg.foodImg, kind: 'foods' },
  { label: 'Магазины', imgSrc: placesImg.shopImg, kind: 'shops' },
  { label: 'Кафе', imgSrc: placesImg.coffeeImg, kind: 'cafes' },
  { label: 'Развлечения', imgSrc: placesImg.amusementsImg, kind: 'tourist_object' },
  { label: 'Банки', imgSrc: placesImg.bankImg, kind: 'banks' },
  { label: 'Места для отдыха', imgSrc: placesImg.hotelsImg, kind: 'accomodations' },
];

export default placesOptions;
