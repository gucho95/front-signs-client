const key = 'user';
const ref = (state) => state[key];

export const selectUser = (state) => ref(state);
export const isAuthedUser = (state) => !!ref(state).data;
