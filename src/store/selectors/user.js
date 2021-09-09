const key = 'user';
const ref = (state) => state[key];

const user = (state) => ({
  loaded: ref(state).loaded,
  failed: ref(state).failed,
  data: ref(state).data?.user,
  token: ref(state).data?.token,
});

export default user;
