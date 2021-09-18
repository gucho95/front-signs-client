import { Spacing } from '@atoms';
import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  row2col: 'grid grid-cols-2 w-full gap-x-2',
  row3col: 'grid grid-cols-3 w-full gap-x-2 gap-y-2',
  bigColumn: 'h-345px',
  smallColumn: 'h-233px',
};

const Type3 = ({ items }) => {
  const firstRowData = items ? items.filter((i, key) => key < 2) : [];
  const secondRowData = items ? items.filter((i, key) => key > 1 && key < 5) : [];
  const thirdRowData = items ? items.filter((i, key) => key > 5) : [];

  return items ? (
    <div className={classes.root}>
      <div className={classes.row2col}>
        {firstRowData.map((i) => (
          <Card className={classes.bigColumn} contentClassName='perfect-center px-32' {...i} />
        ))}
      </div>
      <Spacing className='pt-2' />
      <div className={classes.row3col}>
        {secondRowData.map((i) => (
          <Card className={classes.smallColumn} contentClassName='p-5' {...i} />
        ))}
      </div>
      <div className={classes.row2col}>
        {thirdRowData.map((i) => (
          <Card className={classes.bigColumn} contentClassName='perfect-center px-32' {...i} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type3;
