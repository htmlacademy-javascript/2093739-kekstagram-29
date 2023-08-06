import {getRandomInteger, getRandomArrayElement, generateUniqueValue} from './util.js';

// Константы взяты по ТЗ
const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 6;
const MIN_URL_VALUE = 1;
const MAX_URL_VALUE = 25;
const MIN_LIKE_VALUE = 15;
const MAX_LIKE_VALUE = 200;

// Массив с описаниями фотографий
const PHOTO_DESCRIPTIONS = [
  'Этот момент в памяти навсегда!',
  'Весёлые выдались выходные',
  'Такие простые вещи',
  'Это было... странно',
  'Лучший день моей жизни',
  'Когда камера под рукой в нужный момент',
  'Просто супер!',
  'Море позитива)))'
];

// Массив с текстами комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

// Массив с именами коменнтаторов фотографий
const COMMENTATOR_NAMES = ['Алина','Снежана','Мария','Анна','София','Жанна','Тимофей','Елисей','Александр','Павел','Никита','Олег'];

// Функция создает объект с комментарием к фотографии
const createComment = () => ({
  id: generateUniqueValue([], 1, 999),
  avatar: `img/avatar-${generateUniqueValue([], MIN_AVATAR_VALUE, MAX_AVATAR_VALUE)}.svg`,
  message:getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(COMMENTATOR_NAMES),
});

// Функция создает объект - описание фотографии
const createPhotoDescription = () => ({
  id: generateUniqueValue([], 1, 999),
  url: `photos/${generateUniqueValue([], MIN_URL_VALUE, MAX_URL_VALUE)}.jpg`,
  decription: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_VALUE, MAX_LIKE_VALUE),
  comments: Array.from({ length: 5 }, createComment),
});

// Функция создает массив из 25 объектов - описаний фотографий
const createArrayOfPhotoDescriptions = () => Array.from({ length: 25 }, createPhotoDescription);

export {createArrayOfPhotoDescriptions};