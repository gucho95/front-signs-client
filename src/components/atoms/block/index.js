const { Heading } = require('@atoms');

const classes = {
  root: 'flex items-center border-1px border-grey-dark border-dashed p-2 group transition-all hover:bg-grey-light',
  heading: 'flex-1',
  actions: 'text-p5 invisible group-hover:visible',
};

const Block = ({ name }) => {
  return (
    <div className={classes.root}>
      <Heading level={5} children={name} className={classes.heading} />
      <div className={classes.actions}>Action</div>
    </div>
  );
};

export default Block;
