import { TextForm, TextWidget } from '@widgets/Text';
import { CardWidget, CardForm } from '@widgets/Card';

const WIDGET_TYPES = {
  TEXT: 'text',
  CARD: 'card',
  //   TITLE: 'title',
  //   CAROUSEL: 'carousel',
};

export const WIDGET_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextWidget,
  [WIDGET_TYPES.CARD]: CardWidget,
};

export const WIDGET_FORM_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextForm,
  [WIDGET_TYPES.CARD]: CardForm,
};

export default WIDGET_TYPES;
