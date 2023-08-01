import {openFullImage} from './fullsize.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const miniaturesListFragment = document.createDocumentFragment();

// Функция для отрисовки миниатюр + замыкание на функцию полноэкранной отрисовки
const createMiniatures = (miniature) => {
  miniature.forEach((element) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').setAttribute('src', element.url);
    miniatureElement.querySelector('.picture__img').setAttribute('alt', element.description);
    miniatureElement.querySelector('.picture__likes').textContent = element.likes;
    miniatureElement.querySelector('.picture__comments').textContent = element.comments.length;
    miniaturesListFragment.append(miniatureElement);
    openFullImage(miniatureElement, element);
  });
  pictures.append(miniaturesListFragment);
};

export {createMiniatures};
