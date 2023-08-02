import {getRandomInteger, getRandomArrayElement, generateUniqueValue} from './util.js';

// Константы взяты по ТЗ
const MIN_DESCRIPTION_ID_VALUE = 1;
const MAX_DESCRIPTION_ID_VALUE = 25;
const MIN_URL_VALUE = 1;
const MAX_URL_VALUE = 25;
const MIN_COMMENT_ID_VALUE = 1;
const MAX_COMMENT_ID_VALUE = 999;
const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 6;
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

// функции для создания уникальных значений
const generateUniqueDescriptionId = generateUniqueValue(MIN_DESCRIPTION_ID_VALUE, MAX_DESCRIPTION_ID_VALUE);
const generateUniquePhotoUrl = generateUniqueValue(MIN_URL_VALUE, MAX_URL_VALUE);
const generateUniqueCommentId = generateUniqueValue(MIN_COMMENT_ID_VALUE, MAX_COMMENT_ID_VALUE);


// Функция создает объект с комментарием к фотографии
const createComment = () => ({
  id: generateUniqueDescriptionId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_VALUE, MAX_AVATAR_VALUE)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(COMMENTATOR_NAMES),
});

// Функция создает объект - описание фотографии
const createPhotoDescription = () => ({
  id: generateUniqueCommentId(),
  url: `photos/${generateUniquePhotoUrl()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_VALUE, MAX_LIKE_VALUE),
  comments: Array.from({ length: 25 }, createComment),
});

// Функция создает массив из 25 объектов - описаний фотографий
const createArrayOfPhotoDescriptions = () => Array.from({ length: 25 }, createPhotoDescription);

// Функция для создания аватарки к комментарию
const createAvatar = (data) => {
  const pictureImg = document.createElement('img');
  pictureImg.classList.add('social__picture');
  pictureImg.setAttribute('src', data.avatar);
  pictureImg.setAttribute('alt', data.name);
  pictureImg.setAttribute('width', 35);
  pictureImg.setAttribute('height', 35);
  return pictureImg;
};

// Функция для создания текста комментария
const createCommentMessage = (data) => {
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = data.message;
  return textComment;
};

// Сам комментарий как li в списке комментариев для полноэкранной версии
const createCommentItem = (data) => {
  const eachCommentFragment = document.createDocumentFragment();
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  commentItem.append(createAvatar(data));
  commentItem.append(createCommentMessage(data));
  eachCommentFragment.append(commentItem);
  return eachCommentFragment;
};

export {createArrayOfPhotoDescriptions, createCommentItem};
