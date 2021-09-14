import { WIDGET_COMPONENTS } from '@constants/widgets';

const WidgetRenderer = (props) => {
  const Widget = WIDGET_COMPONENTS[props.type];
  return <Widget {...props} />;
};

export default WidgetRenderer;
