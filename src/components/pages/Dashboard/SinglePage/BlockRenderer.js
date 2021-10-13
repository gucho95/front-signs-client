import { Block } from '@atoms';

const classes = { content: 'grid gap-y-4 gap-y-3' };

const BlockRenderer = ({ data, onRemoveBlock, onUpdate, onRemove, onDuplicate }) => {
  return (
    <div className={classes.content}>
      {data?.length
        ? data.map((item, key) => (
            <Block
              key={key}
              onUpdate={() => onUpdate(item.id)}
              onRemoveBlock={() => onRemoveBlock(item.id)}
              onDuplicate={onDuplicate}
              data={item}
            />
          ))
        : 'No Blocks'}
    </div>
  );
};

export default BlockRenderer;
