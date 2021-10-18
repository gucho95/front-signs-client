import Menu, { MenuItem, Divider } from 'rc-menu';
import React, { Fragment } from 'react';
import { Dropdown, Button, BUTTON_TYPES, BUTTON_SIZES } from '@atoms';

const getMenuData = ({ onAddColumn, onRemoveBlock }) => [
  { key: '1', label: '  Add column', fn: onAddColumn },
  { key: '2', label: '  Remove block', fn: onRemoveBlock },
];

const BlockMenuButton = ({ onAddColumn, onRemoveBlock, menuVisible, setMenuVisible }) => (
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
);

const BlockMenu = ({ onAddColumn, onRemoveBlock, onClose }) => {
  const menu = getMenuData({ onAddColumn, onRemoveBlock });
  const isLastItem = (index) => index === menu.length - 1;
  return (
    <Menu selectable={false} onSelect={onClose}>
      {menu.map(({ key, label, fn }, index) => (
        <Fragment key={index}>
          <MenuItem key={key} onMouseDown={fn} children={label} />
          {isLastItem(index) ? null : <Divider />}
        </Fragment>
      ))}
    </Menu>
  );
};

export default BlockMenuButton;
