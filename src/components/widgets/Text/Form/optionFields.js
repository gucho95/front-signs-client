import { Input, Textarea } from '@atoms';
import { RichEditor } from '@organisms';
import { TYPES } from '../types';

// FIELD TYPES
const TEXT_FIELD = { component: Input, name: 'text', rules: { required: true }, placeholder: 'Text' };
const TITLE_FIELD = { component: Input, name: 'title', rules: { required: true }, placeholder: 'Title' };
const DESCRIPTION_FIELD = {
  component: Textarea,
  name: 'description',
  rules: { required: true },
  placeholder: 'Description',
};

const RICH_CONTENT_FIELD = {
  component: RichEditor,
  name: 'content',
  rules: { required: true },
  placeholder: 'Content',
};

const BUTTON_TEXT_FIELD = {
  component: Input,
  name: 'buttonText',
  rules: { required: true },
  placeholder: 'Button text',
};

export const TYPE_FIELDS = {
  [TYPES[0].value]: [TEXT_FIELD],
  [TYPES[1].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
  [TYPES[2].value]: [DESCRIPTION_FIELD],
  [TYPES[3].value]: [RICH_CONTENT_FIELD],
  [TYPES[4].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
  [TYPES[5].value]: [TITLE_FIELD, DESCRIPTION_FIELD, BUTTON_TEXT_FIELD],
  [TYPES[6].value]: [RICH_CONTENT_FIELD],
  [TYPES[7].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
  [TYPES[8].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
  [TYPES[9].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
  [TYPES[10].value]: [TITLE_FIELD, DESCRIPTION_FIELD],
};
