import { useRef, useMemo } from 'react';
import { Block } from '@atoms';
import { useWindowSize } from '@hooks';

import PageGrid from './PageGrid';

const classes = { content: 'grid gap-y-8' };

const BlockRenderer = ({ data, onRemoveBlock, onLayoutChange }) => {
  const parentRef = useRef(null);
  const { windowWidth } = useWindowSize();
  const parentWidth = useMemo(() => {
    const parentBoundingClientRect = parentRef.current?.getBoundingClientRect();
    return parentBoundingClientRect?.width;
  }, [windowWidth, parentRef.current]);

  return (
    <div className={classes.content} ref={parentRef}>
      <PageGrid data={data} width={parentWidth} onRemoveBlock={onRemoveBlock} onLayoutChange={onLayoutChange} />
      {/* {data?.length
        ? data.map((item, key) => (
            <Block
              key={key}
              onUpdate={() => onUpdate(item.id)}
              onRemoveBlock={() => onRemoveBlock(item.id)}
              onDuplicate={onDuplicate}
              data={item}
            />
          ))
        : 'No Blocks'} */}
    </div>
  );
};

export default BlockRenderer;
