import Menu, { MenuItem, Divider } from 'rc-menu';
import React, { Fragment } from 'react';

const getMenuData = ({ onAddColumn, onRemoveBlock }) => [
  { key: '1', label: '  Add column', fn: onAddColumn },
  { key: '2', label: '  Remove block', fn: onRemoveBlock },
];

const BlockMenu = ({ onAddColumn, onRemoveBlock, onClose }) => {
  const menu = getMenuData({ onAddColumn, onRemoveBlock });
  const isLastItem = (index) => index === menu.length - 1;
  return (
    <Menu selectable={false} onSelect={onClose}>
      {menu.map(({ key, label, fn }, index) => (
        <Fragment>
          <MenuItem key={key} onMouseDown={fn} children={label} />
          {isLastItem(index) ? null : <Divider />}
        </Fragment>
      ))}
    </Menu>
  );
};

export default BlockMenu;
