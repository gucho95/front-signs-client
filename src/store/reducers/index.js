import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';
import pageWidgets from './pageWidgets';
import ui from './ui';

const reducers = combineReducers({ user, pages, pageWidgets, ui });

export default reducers;
