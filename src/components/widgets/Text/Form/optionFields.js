import { Input, Textarea } from '@atoms';
import { RichEditor } from '@organisms';
import { OPTIONS } from './options';

const TEXT_FIELD = { component: Input, name: 'text', rules: { required: true }, placeholder: 'Text' };
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

export const OPTION_FIELDS = {
  [OPTIONS[0].value]: [TEXT_FIELD],
  [OPTIONS[1].value]: [TEXT_FIELD, DESCRIPTION_FIELD],
  [OPTIONS[2].value]: [DESCRIPTION_FIELD],
  [OPTIONS[3].value]: [RICH_CONTENT_FIELD],
};
