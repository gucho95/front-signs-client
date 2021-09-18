import { TextWidget, TextForm } from '@widgets/Text';
import { CardWidget, CardForm } from '@widgets/Card';
import { AnimatedCardWidget, AnimatedCardForm } from '@widgets/AnimatedCard';
import { CarouselWidget, CarouselForm } from '@widgets/Carousel';

const WIDGET_TYPES = {
  TEXT: 'text',
  CARD: 'card',
  ANIMATED_CARD: 'animated_card',
  CAROUSEL: 'carousel',
  //   TITLE: 'title',
  //   CAROUSEL: 'carousel',
};

export const WIDGET_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextWidget,
  [WIDGET_TYPES.CARD]: CardWidget,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardWidget,
  [WIDGET_TYPES.CAROUSEL]: CarouselWidget,
};

export const WIDGET_FORM_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextForm,
  [WIDGET_TYPES.CARD]: CardForm,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardForm,
  [WIDGET_TYPES.CAROUSEL]: CarouselForm,
};

export default WIDGET_TYPES;
