import { generateTextField, IMAGE_FIELD, TEXT_FIELD } from '@constants/fields';
import { TYPES } from '../types';

export const TYPE_FIELDS = {
  [TYPES[0].value]: [
    IMAGE_FIELD,
    generateTextField({ name: 'text[0]', placeholder: 'Text 1' }),
    generateTextField({ name: 'text[1]', placeholder: 'Text 2' }),
    generateTextField({ name: 'text[2]', placeholder: 'Text 3' }),
    generateTextField({ name: 'text[3]', placeholder: 'Text 4' }),
  ],
};
