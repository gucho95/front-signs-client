import { TextWidget, TextForm } from '@widgets/Text';
import { CardWidget, CardForm } from '@widgets/Card';
import { AnimatedCardWidget, AnimatedCardForm } from '@widgets/AnimatedCard';
import { SliderWidget, SliderForm } from '@widgets/Slider';
import { MaterialsWidget, MaterialsForm } from '@widgets/Materials';
import { AnimatedIconsWidget, AnimatedIconsForm } from '@widgets/AnimatedIcons';
import { ChangableImagesWidget, ChangableImagesForm } from '@widgets/ChangableImages';
import { ServicesWidget, ServicesForm } from '@widgets/Services';
import { ReviewsForm, ReviewsWidget } from '@widgets/Reviews';
import { ProjectsWidget, ProjectsForm } from '@widgets/Projects';
import { ProductsWidget, ProductsForm } from '@widgets/Products';

const WIDGET_TYPES = {
  TEXT: 'text',
  CARD: 'card',
  ANIMATED_CARD: 'animated_card',
  SLIDER: 'slider',
  MATERIALS: 'materials',
  ANIMATED_ICONS: 'animated-icons',
  CHANGABLE_IMAGES: 'changable-images',
  SERVICES: 'services',
  REVIEWS: 'reviews',
  PROJECTS: 'projects',
  PRODUCTS: 'products',
};

export const WIDGET_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextWidget,
  [WIDGET_TYPES.CARD]: CardWidget,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardWidget,
  [WIDGET_TYPES.SLIDER]: SliderWidget,
  [WIDGET_TYPES.MATERIALS]: MaterialsWidget,
  [WIDGET_TYPES.ANIMATED_ICONS]: AnimatedIconsWidget,
  [WIDGET_TYPES.CHANGABLE_IMAGES]: ChangableImagesWidget,
  [WIDGET_TYPES.SERVICES]: ServicesWidget,
  [WIDGET_TYPES.REVIEWS]: ReviewsWidget,
  [WIDGET_TYPES.PROJECTS]: ProjectsWidget,
  [WIDGET_TYPES.PRODUCTS]: ProductsWidget,
};

export const WIDGET_FORM_COMPONENTS = {
  [WIDGET_TYPES.TEXT]: TextForm,
  [WIDGET_TYPES.CARD]: CardForm,
  [WIDGET_TYPES.ANIMATED_CARD]: AnimatedCardForm,
  [WIDGET_TYPES.SLIDER]: SliderForm,
  [WIDGET_TYPES.MATERIALS]: MaterialsForm,
  [WIDGET_TYPES.ANIMATED_ICONS]: AnimatedIconsForm,
  [WIDGET_TYPES.CHANGABLE_IMAGES]: ChangableImagesForm,
  [WIDGET_TYPES.SERVICES]: ServicesForm,
  [WIDGET_TYPES.REVIEWS]: ReviewsForm,
  [WIDGET_TYPES.PROJECTS]: ProjectsForm,
  [WIDGET_TYPES.PRODUCTS]: ProductsForm,
};

export default WIDGET_TYPES;
