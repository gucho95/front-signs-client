const { Heading, Button, Text, BUTTON_TYPES, TEXT_TYPES, BUTTON_SIZES } = require('@atoms');

const classes = {
  root: 'flex items-center border-1px border-grey-dark border-dashed p-2 group transition-all hover:bg-grey-light',
  heading: 'flex-1',
  actions: 'text-p5 invisible group-hover:visible flex space-x-2',
};

const Block = ({ data, onRemove, onUpdate, onDuplicate }) => {
  const { type, option } = data;
  return (
    <div className={classes.root}>
      <Heading level={5} className={classes.heading}>
        <Text type={TEXT_TYPES.BOLD} children={type?.toUpperCase()} />
        <Text children={` - type ${option}`} />
      </Heading>
      <div className={classes.actions}>
        <Button
          type={BUTTON_TYPES.SECONDARY}
          size={BUTTON_SIZES.SMALL}
          onClick={() => onDuplicate(data)}
          children='Duplicate'
        />
        <Button type={BUTTON_TYPES.SECONDARY} size={BUTTON_SIZES.SMALL} onClick={onUpdate} children='Update' />
        <Button type={BUTTON_TYPES.DANGER} size={BUTTON_SIZES.SMALL} onClick={onRemove} children='Remove' />
      </div>
    </div>
  );
};

export default Block;
