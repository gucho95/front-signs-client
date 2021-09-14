import { PAGE_WIDGETS } from 'store/actionTypes';
import generate from './generate';

const pageWidgets = {
  add: generate(PAGE_WIDGETS.ADD),
};

export default pageWidgets;
