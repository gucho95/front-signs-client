import axios from 'axios';
import { store } from '@store/config';
import selectors from '@selectors';
const { REACT_APP_LOCAL_API } = process.env;

const client = () => {
  const state = store.getState();
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
