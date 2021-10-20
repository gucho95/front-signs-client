import { GRID_CLASSES } from '@constants/classes';
import classNames from 'classnames';
import WidgetRenderer from './WidgetRenderer';

const ColumnRenderer = ({ data }) => {
  const widget = data?.widget;
  const Widget = widget ? <WidgetRenderer {...widget.widgetData} /> : null;
  const colWidth = data.layout.w;
  const widthClassName = GRID_CLASSES[colWidth];

  return <div children={Widget} className={classNames(widthClassName, 'flex-shrink-0 brd')} />;
};

export default ColumnRenderer;
