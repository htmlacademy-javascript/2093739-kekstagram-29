import {createArrayOfPhotoDescriptions} from './data.js';
import {createMiniatures} from './miniatures.js';
import './form.js';

// Отрисовка 25 миниатюр из массива с объектами - описаниями
createMiniatures(createArrayOfPhotoDescriptions());
