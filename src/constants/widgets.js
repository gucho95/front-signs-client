import { TextForm, TextWidget } from '@widgets';

const WIDGET_TYPES = {
  TEXT: 'text',
  //   TITLE: 'title',
  //   CAROUSEL: 'carousel',
};

export const WIDGET_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextWidget,
};

export const WIDGET_FORM_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextForm,
};

export default WIDGET_TYPES;
