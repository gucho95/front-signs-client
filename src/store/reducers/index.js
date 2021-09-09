import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';

const reducers = combineReducers({ user, pages });

export default reducers;
