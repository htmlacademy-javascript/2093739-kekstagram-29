import {isEscapeKey} from './fullsize.js';
import {resetEffects, onEffectsChange} from './photo-effects.js';
import {resetScale, onSmallerButtonClick, onBiggerButtonClick} from './photo-scale.js';

const MAX_HASHTAGS_COUNT = 5;
const HASHTAGS_RULES = /^#[a-zа-яё0-9]{1,19}$/i;
const TAGS_ERROR_TEXT = 'Неправильно прописаны хештеги';

const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('.img-upload__submit');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const fileField = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

const successElement = document.querySelector('#success').content.querySelector('.success');
const successButtonElement = document.querySelector('#success').content.querySelector('.success__button');

const errorElement = document.querySelector('#error').content.querySelector('.error');
const errorButtonElement = document.querySelector('#error').content.querySelector('.error__button');

const smallerButtonForm = document.querySelector('.scale__control--smaller');
const biggerButtonForm = document.querySelector('.scale__control--bigger');
const effects = document.querySelector('.effects');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  smallerButtonForm.addEventListener('click', onSmallerButtonClick);
  biggerButtonForm.addEventListener('click', onBiggerButtonClick);
  cancelButton.addEventListener('click', onCancelButtonClick);
  effects.addEventListener('change', onEffectsChange);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  smallerButtonForm.removeEventListener('click', onSmallerButtonClick);
  biggerButtonForm.removeEventListener('click', onBiggerButtonClick);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  effects.removeEventListener('change', onEffectsChange);
};

const TextFieldFocus = () =>
  document.activeElement === hashtagField || document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !TextFieldFocus()) {
    evt.preventDefault();
    const hasHiddenPopup = document.querySelector('.error');
    if (!hasHiddenPopup) {
      hideModal();
    }
  }
}

function onCancelButtonClick() {
  hideModal();
}

function onFileInputChange() {
  showModal();
}

const isValidTag = (tag) => HASHTAGS_RULES.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAGS_ERROR_TEXT
);

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикация...';
};

const showSuccessMessage = () => {
  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      document.body.append(successElement);
    } else {
      const successElementClone = document.querySelector('.success');
      successElementClone.classList.remove('hidden');
    }
  };
};
const showFullSuccessMessage = showSuccessMessage();

const showErrorMessage = () => {
  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      document.body.append(errorElement);
    } else {
      const errorElementClone = document.querySelector('.error');
      errorElementClone.classList.remove('hidden');
    }
  };
};
const showFullErrorMessage = showErrorMessage();

const hideModalMessage = () => {
  successElement.classList.add('hidden');
  errorElement.classList.add('hidden');
};

const onBodyClick = (evt) => {
  evt.stopPropagation();
  if (evt.target.matches('.success') || evt.target.matches('.error')) {
    hideModalMessage();
    document.removeEventListener('click', onBodyClick);
    cancelButton.removeEventListener('click', onCancelButtonClick);
  }
};

const onCloseButtonClick = () => {
  hideModalMessage();
};

const onEscPress = (evt) => {
  if (isEscapeKey(evt)) {
    hideModalMessage();
    document.removeEventListener('keydown', onEscPress);
  }
};

const onFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      successButtonElement.addEventListener('click', onCloseButtonClick);
      errorButtonElement.addEventListener('click', onCloseButtonClick);
      document.addEventListener('keydown', onEscPress);
      document.addEventListener('click', onBodyClick);
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange);

export {onFormSubmit, hideModal, showFullSuccessMessage, showFullErrorMessage};
