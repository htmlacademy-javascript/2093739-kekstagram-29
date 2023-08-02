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

export {createCommentItem};
