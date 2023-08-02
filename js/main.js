
import {createMiniatures} from './miniatures.js';
import {getData, sendData} from './network.js';
import {onFormSubmit, hideModal, showFullSuccessMessage, showFullErrorMessage} from './form.js';
import {showAlert} from './util.js';

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
} catch (err) {
  showAlert(err.message);
}
