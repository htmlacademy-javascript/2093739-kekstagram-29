import {openFullImage, closeFullImage} from './fullsize.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const miniaturesListFragment = document.createDocumentFragment();
const imgFiltersElement = document.querySelector('.img-filters');

// Функция для отрисовки миниатюр + закрытие и открытие полноэкранного варианта
const createMiniatures = (miniature) => {
  miniature.forEach((element) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').setAttribute('src', element.url);
    miniatureElement.querySelector('.picture__img').setAttribute('alt', element.description);
    miniatureElement.querySelector('.picture__likes').textContent = element.likes;
    miniatureElement.querySelector('.picture__comments').textContent = element.comments.length;
    miniaturesListFragment.append(miniatureElement);
    openFullImage(miniatureElement, element);
    closeFullImage();
  });

  pictures.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
  pictures.append(miniaturesListFragment);
  imgFiltersElement.classList.remove('img-filters--inactive');
};

export {createMiniatures};
