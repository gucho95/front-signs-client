import Card from '../Card';

const classes = {
  root: 'w-1470px max-w-full mx-auto',
  row3col: 'grid grid-cols-3 w-full gap-x-2 gap-y-2',
  column: 'h-122px',
};

const Type6 = ({ items }) => {
  return items ? (
    <div className={classes.root}>
      <div className={classes.row3col}>
        {items.map((i) => (
          <Card className={classes.column} contentClassName='px-5 pt-12' {...i} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Type6;
