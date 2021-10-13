import { Button, BUTTON_SIZES, BUTTON_TYPES, Dropdown, Text } from '@atoms';
import { selectColumnWidget } from '@selectors/columnsWidgets';
import classNames from 'classnames';
import Menu, { MenuItem, Divider } from 'rc-menu';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

const classes = {
  root: 'px-4 flex group hover:border-black border-1px border-grey-dark border-dashed hover:shadow-4',
};

const getMenuData = ({ onAppendWidget, onRemoveColumn }) => [
  { key: '1', label: 'Append widget', fn: onAppendWidget },
  { key: '2', label: 'Remove column', fn: onRemoveColumn },
];

const ColumnMenu = ({ onAppendWidget, onRemoveColumn, onClose, index }) => {
  const menu = getMenuData({ onAppendWidget, onRemoveColumn });
  const isLastItem = (index) => index === menu.length - 1;
  return (
    <Menu selectable={false} onSelect={onClose}>
      {menu.map(({ key, label, fn }, index) => (
        <Fragment key={key}>
          <MenuItem key={key} onMouseDown={fn} children={label} />
          {isLastItem(index) ? null : <Divider />}
        </Fragment>
      ))}
    </Menu>
  );
};

const Column = ({ data, onAppendWidget, onRemoveColumn, index }) => {
  const [menuButtonVisible, setMenuButtonVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const columnWidget = useSelector((state) => selectColumnWidget(state, data.id));
  const widgetData = columnWidget?.widgetData;

  return (
    <div
      className={classes.root}
      onMouseEnter={() => setMenuButtonVisible(true)}
      onMouseLeave={() => {
        setMenuButtonVisible(false);
        setMenuVisible(false);
      }}
    >
      <div className='flex flex-col flex-1 overflow-hidden justify-center'>
        <Text className='truncate'>
          {widgetData?.type ? `${widgetData?.type}/${widgetData?.option}` : 'No widget'}{' '}
        </Text>
      </div>
      <div className={classNames('text-p5 flex justify-end items-center ', menuButtonVisible ? 'flex' : 'hidden')}>
        <Dropdown
          trigger={'hover'}
          menu={ColumnMenu({ onAppendWidget, onRemoveColumn, index })}
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

export default Column;
