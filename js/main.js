import {createMiniatures} from './miniatures.js';
import {getData, sendData} from './network.js';
import {onFormSubmit, hideModal, showFullSuccessMessage, showFullErrorMessage} from './form.js';
import {showAlert, debounce} from './util.js';
import {initFilterListeners} from './filters.js';
import './photo-upload.js';

const RENDER_PHOTOS_DELAY = 500;

onFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showFullSuccessMessage();
  } catch {
    showFullErrorMessage();
  }
});

try {
  const data = await getData();
  createMiniatures(data);
  initFilterListeners(data, debounce(createMiniatures, RENDER_PHOTOS_DELAY));
} catch (err) {
  showAlert(err.message);
}
