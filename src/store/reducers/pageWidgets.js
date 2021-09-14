import { PAGE_WIDGETS } from '@store/actionTypes';
const { ADD } = PAGE_WIDGETS;

export const initialState = {};

const pageWidgets = (state = initialState, action) => {
  const { type, payload } = action;
  const page = payload?.page;
  const widgetData = payload?.widgetData;
  switch (true) {
    case [ADD].includes(type):
      return {
        ...state,
        [page]: state?.[page] ? [...state[page], widgetData] : [widgetData],
      };
    default:
      return state;
  }
};

export default pageWidgets;
