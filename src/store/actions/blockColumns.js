import { BLOCK_COLUMNS } from 'store/actionTypes';
import generate from './generate';

const blockColumns = {
  add: generate(BLOCK_COLUMNS.ADD),
  update: generate(BLOCK_COLUMNS.UPDATE),
  updateIndex: generate(BLOCK_COLUMNS.UPDATE_INDEX),
  remove: generate(BLOCK_COLUMNS.REMOVE),
};

export default blockColumns;
