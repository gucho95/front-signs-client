import WidgetRenderer from './WidgetRenderer';

const ColumnRenderer = ({ data }) => {
  const widget = data?.widget;

  return widget ? <WidgetRenderer {...widget.widgetData} /> : null;
};

export default ColumnRenderer;
