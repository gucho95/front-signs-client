import client from 'store/client';
import endpoints from 'store/endpoints';

const userData = {
  email: 'admin@gmail.com',
  password: 'admin@gmail.com',
};

const checkUser = (data) => {
  return data.email === userData.email && data.password === userData.password;
};

function fakePromise(data) {
  return new Promise(function (resolve, reject) {
    const isValid = checkUser(data);
    setTimeout(() => (isValid ? resolve(data) : reject(data)), 500);
  });
}

const auth = {
  signIn: (payload) => fakePromise(payload),
  signUp: (payload) => client().post(endpoints.signUp, payload),
};

export default auth;
