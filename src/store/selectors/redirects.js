const key = 'redirects';
const ref = (state) => state[key];

export const selectRedirects = (state) => ref(state);

export const selectRedirectsData = (state) =>
  ref(state).data?.rows?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
export const selectRedirectsCount = (state) => ref(state).data?.count;
