import { PAGE_WIDGETS } from '@store/actionTypes';
const { ADD, REMOVE } = PAGE_WIDGETS;

export const initialState = {};

const pageWidgets = (state = initialState, action) => {
  const { type, payload } = action;
  const page = payload?.page;
  const widgetIndex = payload?.index;
  const widgetData = payload?.widgetData;

  switch (type) {
    case ADD:
      return {
        ...state,
        [page]: state?.[page] ? [...state[page], widgetData] : [widgetData],
      };

    case REMOVE:
      return {
        ...state,
        [page]: state[page].filter((w, i) => i !== widgetIndex),
      };
    default:
      return state;
  }
};

export default pageWidgets;
