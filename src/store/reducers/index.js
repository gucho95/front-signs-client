import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';
import ui from './ui';

const reducers = combineReducers({ user, pages, ui });

export default reducers;
