import React, { useMemo } from 'react';
import GridLayout from 'react-grid-layout';
import Column from './Column';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const generateLayout = (cols) =>
  cols.map((col) => ({ i: col.id, x: col.index, y: 0, w: 1, h: 1, maxw: 1, isResizable: false }));

const BlockGrid = ({ width = window.innerWidth, columns, onLayoutChange, onAppendWidget, onRemoveColumn }) => {
  const layout = useMemo(() => generateLayout(columns), [columns?.length]);

  return (
    <GridLayout
      maxRows={1}
      cols={columns.length}
      onLayoutChange={onLayoutChange}
      width={width}
      layout={layout}
      rowHeight={108}
      compactType='horizontal'
      draggableHandle='.drag'
      draggableCancel='.no-col-drag'
      isBounded={true}
    >
      {columns.map((column, index) => (
        <div key={column.id} className='no-row-drag'>
          <Column data={column} index={index + 1} onAppendWidget={onAppendWidget} onRemoveColumn={onRemoveColumn} />
        </div>
      ))}
    </GridLayout>
  );
};

export default BlockGrid;
