// Функция для получения случаного целого числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для получение уникального значения из диапазона
const generateUniqueValue = (arr, minElement, maxElement) => {
  let value = getRandomInteger(minElement, maxElement);
  if (arr.length >= maxElement) {
    return null;
  }
  while (arr.includes(value)) {
    value = getRandomInteger(minElement, maxElement);
  }
  arr.push(value);
  return value;
};

export {getRandomInteger, getRandomArrayElement, generateUniqueValue};
