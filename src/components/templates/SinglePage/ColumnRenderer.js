import WidgetRenderer from './WidgetRenderer';

const ColumnRenderer = ({ data }) => {
  const widget = data?.widget;

  return widget ? (
    <div>
      <WidgetRenderer {...widget.widgetData} />
    </div>
  ) : null;
};

export default ColumnRenderer;
