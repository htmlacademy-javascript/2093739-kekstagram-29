import {createCommentItem} from './data.js';

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

export {openFullImage};
