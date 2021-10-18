import { TextWidget, TextForm } from '@widgets/Text';
import { CardWidget, CardForm } from '@widgets/Card';
import { AnimatedCardWidget, AnimatedCardForm } from '@widgets/AnimatedCard';
import { SliderWidget, SliderForm } from '@widgets/Slider';
import { MaterialsWidget, MaterialsForm } from '@widgets/Materials';
import { AnimatedIconsWidget, AnimatedIconsForm } from '@widgets/AnimatedIcons';

const WIDGET_TYPES = {
  TEXT: 'text',
  CARD: 'card',
  ANIMATED_CARD: 'animated_card',
  SLIDER: 'slider',
  MATERIALS: 'materials',
  ANIMATED_ICONS: 'animated-icons',
};

export const WIDGET_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextWidget,
  [WIDGET_TYPES.CARD]: CardWidget,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardWidget,
  [WIDGET_TYPES.SLIDER]: SliderWidget,
  [WIDGET_TYPES.MATERIALS]: MaterialsWidget,
  [WIDGET_TYPES.ANIMATED_ICONS]: AnimatedIconsWidget,
};

export const WIDGET_FORM_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextForm,
  [WIDGET_TYPES.CARD]: CardForm,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardForm,
  [WIDGET_TYPES.SLIDER]: SliderForm,
  [WIDGET_TYPES.MATERIALS]: MaterialsForm,
  [WIDGET_TYPES.ANIMATED_ICONS]: AnimatedIconsForm,
};

export default WIDGET_TYPES;
