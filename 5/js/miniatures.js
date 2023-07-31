const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const miniaturesListFragment = document.createDocumentFragment();

// Функция для отрисовки миниатюр
const createMiniatures = (miniature) => {
  miniature.forEach(({ url, likes, comments, description }) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__img').alt = description;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;
    miniaturesListFragment.append(miniatureElement);
  });
  pictures.append(miniaturesListFragment);
};

export {createMiniatures};
