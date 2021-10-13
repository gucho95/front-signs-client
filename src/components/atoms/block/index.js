import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Spacing, Button, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';
import { useRouter } from '@hooks';
import { selectBlockColumns, selectBlockLastColumn } from '@selectors/blockColumns';
import blockColumnsAction from '@actions/blockColumns';
import { v4 as uuidv4 } from 'uuid';
import { COLUMN } from '@constants/system';
import { GRID_CLASSES } from '@constants/classes';
import classNames from 'classnames';
import BlockMenu from './BlockMenu';
import Column from './Column';

const MAX_COLUMNS = 12;

const classes = {
  wrapper: 'flex w-full flex-1',
  heading: 'flex-1',
  root: 'min-h-104px flex w-full border-1px border-grey-dark border-dashed  transition-all hover:border-black relative',
  grid: 'grid gap-2 w-full p-3',
  actions: ' overflow-hidden text-p5 group-hover:flex flex flex-col space-x-2 transition-all',
};

const Block = ({ data, onRemoveBlock }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useDispatch();
  const { history, pathname } = useRouter();
  const columns = useSelector((state) => selectBlockColumns(state, data.id));
  const lastColumn = useSelector((state) => selectBlockLastColumn(state, data.id));
  const gridClassName = GRID_CLASSES[columns?.length];
  const allowAdd = columns.length < MAX_COLUMNS;

  // COLUMN ACTIONS
  const onAddColumn = () => {
    if (!allowAdd) {
      return;
    }
    const columnData = {
      parentId: data.id,
      id: uuidv4(),
      index: lastColumn ? lastColumn.index + 1 : 0,
      type: COLUMN,
    };
    dispatch(blockColumnsAction.add(columnData));
  };

  const onRemoveColumn = (payload) => dispatch(blockColumnsAction.remove(payload));

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        {/* <Heading level={5} className={classes.heading}>
        <Text type={TEXT_TYPES.BOLD} children={type?.toUpperCase()} />
        <Text children={` - type ${option}`} />
      </Heading> */}
        <div className={classNames(classes.grid, gridClassName)}>
          {columns.length
            ? columns.map((col, index) => (
                <Column
                  key={col.id}
                  data={col}
                  index={index + 1}
                  onAppendWidget={() => history.push(`${pathname}/columns/${col.id}`)}
                  onRemoveColumn={() => onRemoveColumn(col.id)}
                />
              ))
            : 'No Columns'}
        </div>
      </div>
      <Spacing className='pl-2' />
      <div className='flex items-center'>
        <Dropdown
          trigger={'hover'}
          menu={BlockMenu({ onAddColumn, onRemoveBlock })}
          keepVisibleIds={['1']}
          visible={menuVisible}
          setVisible={setMenuVisible}
        >
          <Button
            type={BUTTON_TYPES.SECONDARY}
            size={BUTTON_SIZES.CUSTOM}
            className='px-2 py-[6px] font-bold'
            children='...'
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Block;
