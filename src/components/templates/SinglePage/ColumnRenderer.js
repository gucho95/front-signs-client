import WidgetRenderer from './WidgetRenderer';

const ColumnRenderer = ({ data }) => {
  const widget = data?.widget;
  return widget ? (
    <div className='overflow-hidden p-4'>
      <WidgetRenderer {...widget.widgetData} />
    </div>
  ) : null;
};

export default ColumnRenderer;
