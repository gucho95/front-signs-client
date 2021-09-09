import { PAGES } from '@store/actionTypes';
const { ADD } = PAGES;

const data = [
  { id: 1, path: 'page-1', label: 'First Page', data: 'page-1', count: 5, icon: 'Icon' },
  { id: 2, path: 'page-2', label: 'Second Page', data: 'page-2', count: 8, icon: 'Icon' },
  { id: 3, path: 'page-3', label: 'Third Page', data: 'page-3', count: 9, icon: 'Icon' },
  { id: 4, path: 'page-4', label: 'Fourth Page', data: 'page-4', count: 22, icon: 'Icon' },
];

export const initialState = { data, loaded: false, failed: false };

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