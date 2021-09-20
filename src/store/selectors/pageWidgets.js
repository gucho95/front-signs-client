const key = 'pageWidgets';
const ref = (state) => state[key];

export const selectPageWidgets = (state, page) => ref(state)?.[page];
export const selectPageWidget = (state, page, widgetId) =>
  selectPageWidgets(state, page)?.find((w) => w.id === widgetId);
