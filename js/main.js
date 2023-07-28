// Массив с именами коменнтаторов фотографий

const COMMENTATOR_NAMES = ['Алина','Снежана','Мария','Анна','София','Жанна'];

// Функция для получения случайного числа в диапазоне

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для получения случайного элемента из массива

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//

const createComment = () => ({
  name: getRandomArrayElement(COMMENTATOR_NAMES),
});
createComment();
