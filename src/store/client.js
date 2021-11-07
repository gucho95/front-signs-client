import axios from 'axios';
import { store } from '@store/config';
import { selectUser } from '@selectors/user';
const { REACT_APP_ROOT_API } = process.env;

const client = () => {
  const state = store.getState();
  const { token } = selectUser(state);
  const mockToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1Y2hvOTVAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYzNjMxMjkwOSwiZXhwIjoxNjM2Mzk5MzA5fQ.A8ILBDMY5MnVAlheIjYrSzn6Il7BBt-K1titdRBbzYM`;

  const service = axios.create({
    baseURL: REACT_APP_ROOT_API,
    headers: { Authorization: mockToken },
  });

  service.interceptors.response.use(
    (data) => data,
    (error) => {}
  );
  return service;
};

export default client;
