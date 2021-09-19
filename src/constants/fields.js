import { Input, Textarea } from '@atoms';
import { RichEditor } from '@organisms';

const urlPattern =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

export const TEXT_FIELD = { component: Input, name: 'text', rules: { required: true }, placeholder: 'Text' };
export const TITLE_FIELD = { component: Input, name: 'title', rules: { required: true }, placeholder: 'Title' };

export const DESCRIPTION_FIELD = {
  component: Textarea,
  name: 'description',
  rules: { required: true },
  placeholder: 'Description',
};

export const RICH_CONTENT_FIELD = {
  component: RichEditor,
  name: 'content',
  rules: { required: true },
  placeholder: 'Content',
};

export const RICH_TITLE_FIELD = {
  component: RichEditor,
  name: 'title',
  rules: { required: true },
  placeholder: 'Title',
};

export const BUTTON_TEXT_FIELD = {
  component: Input,
  name: 'buttonText',
  rules: { required: true },
  placeholder: 'Button text',
};

export const IMAGE_FIELD = {
  component: Input,
  name: 'image',
  rules: { required: true, pattern: urlPattern },
  placeholder: 'Image url',
};

export const VIDEO_FIELD = {
  component: Input,
  name: 'video',
  rules: { required: true, pattern: urlPattern },
  placeholder: 'Video url',
};

export const RATE_FIELD = {
  component: Input,
  name: 'rate',
  rules: {
    required: true,
    min: 0,
    max: 5,
  },
  placeholder: 'Rate value ( 0-5 )',
};