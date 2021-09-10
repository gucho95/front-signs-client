import axios from 'axios';
import { store } from '@store/config';
import { selectUser } from '@selectors/user';
const { REACT_APP_LOCAL_API } = process.env;

const client = () => {
  const state = store.getState();
  const { token } = selectUser(state);

  const service = axios.create({
    baseURL: REACT_APP_LOCAL_API,
    headers: { 'X-Access-Token': token ? token : null },
  });

  service.interceptors.response.use(
    (data) => data,
    (error) => {}
  );
  return service;
};

export default client;
