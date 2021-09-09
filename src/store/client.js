import axios from 'axios';
import { store } from '@store/config';
import selectors from '@selectors';
import actions from './actions';
const { REACT_APP_LOCAL_API } = process.env;

const client = () => {
  const state = store.getState();
  const signOut = actions.auth.signOut;
  const { token } = selectors.user(state);

  const service = axios.create({
    baseURL: REACT_APP_LOCAL_API,
    headers: { 'X-Access-Token': token ? token : null },
  });
  service.interceptors.response.use(
    (response) => response.data,
    (error) => {}
  );
  return service;
};

export default client;
