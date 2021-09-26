import { PAGE_WIDGETS } from 'store/actionTypes';
import generate from './generate';

const pageWidgets = {
  add: generate(PAGE_WIDGETS.ADD),
  update: generate(PAGE_WIDGETS.UPDATE),
  remove: generate(PAGE_WIDGETS.REMOVE),
  duplicate: generate(PAGE_WIDGETS.DUPLICATE),
};

export default pageWidgets;
