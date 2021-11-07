import { combineReducers } from 'redux';
import user from './user';
import ui from './ui';
import pages from './pages';
import pageBlocks from './pageBlocks';
import blockColumns from './blockColumns';
import columnWidgets from './columnWidgets';
import media from './media';

const reducers = combineReducers({ user, pages, pageBlocks, blockColumns, columnWidgets, ui, media });

export default reducers;
