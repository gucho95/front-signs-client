const { Heading, Button, Text, BUTTON_TYPES, TEXT_TYPES } = require('@atoms');

const classes = {
  root: 'flex items-center border-1px border-grey-dark border-dashed p-2 group transition-all hover:bg-grey-light',
  heading: 'flex-1',
  actions: 'text-p5 invisible group-hover:visible',
};

const Block = ({ type, option, onRemove }) => {
  return (
    <div className={classes.root}>
      <Heading level={5} className={classes.heading}>
        <Text type={TEXT_TYPES.BOLD} children={type.toUpperCase()} />
        <Text children={` - type ${option}`} />
      </Heading>
      <div className={classes.actions}>
        <Button type={BUTTON_TYPES.DANGER} onClick={onRemove} children='Remove' />
      </div>
    </div>
  );
};

export default Block;
