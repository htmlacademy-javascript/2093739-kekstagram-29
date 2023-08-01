import {createCommentItem} from './data.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция по событию клика на миниатюру принимает данные из объекта - комментария и отрисовывает полноэкранный вариант изображения с всеми комментариями
const openFullImage = (item, data) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
    document.querySelector('.big-picture .likes-count').textContent = data.likes;
    document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
    document.querySelector('.big-picture .social__caption').textContent = data.description;
    document.querySelector('.social__comments').innerHTML = '';
    data.comments.forEach((comment) => document.querySelector('.social__comments').append(createCommentItem(comment)));
  });
};

const closeFullImage = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
};

export {openFullImage, closeFullImage};
