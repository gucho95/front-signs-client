import { GRID_CLASSES } from '@constants/classes';
import classNames from 'classnames';
import ColumnRenderer from './ColumnRenderer';

const BlockRenderer = ({ data }) => {
  const columns = data?.columns;
  const columnsLength = columns?.length;
  const gridClassName = GRID_CLASSES?.[columnsLength];

  return columnsLength ? (
    <div className={classNames('grid', gridClassName)}>
      {columns.map((column) => (
        <ColumnRenderer key={column.id} data={column} />
      ))}
    </div>
  ) : null;
};

export default BlockRenderer;
