const key = 'pageWidgets';
const ref = (state) => state[key];

export const selectPageWidgets = (state, page) => ref(state)?.[page];
