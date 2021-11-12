import axios from 'axios';
import { store } from '@store/config';
import { selectUserToken } from '@selectors/user';
const { REACT_APP_ROOT_API } = process.env;

const client = () => {
  const state = store.getState();
  const userToken = selectUserToken(state);

  const service = axios.create({
    baseURL: REACT_APP_ROOT_API,
    headers: { Authorization: userToken ? `Bearer ${userToken}` : null },
  });

  service.interceptors.response.use(
    // SUCCESS CASE
    ({ data, config }) => ({ data, params: config }),
    // FAIL CASE
    (error) => {
      return Promise.reject(error);
    }
  );
  return service;
};

export default client;
