import { PAGES } from '@store/actionTypes';
const { ADD } = PAGES;

export const initialState = { data: [], loaded: false, failed: false };

const pages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (true) {
    case [ADD].includes(type):
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
};

export default pages;
