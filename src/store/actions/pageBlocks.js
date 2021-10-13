import { PAGE_BLOCKS } from 'store/actionTypes';
import generate from './generate';

const pageWidgets = {
  add: generate(PAGE_BLOCKS.ADD),
  update: generate(PAGE_BLOCKS.UPDATE),
  remove: generate(PAGE_BLOCKS.REMOVE),
  duplicate: generate(PAGE_BLOCKS.DUPLICATE),
};

export default pageWidgets;
