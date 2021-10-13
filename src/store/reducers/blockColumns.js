import { BLOCK_COLUMNS } from '@store/actionTypes';
const { ADD, REMOVE } = BLOCK_COLUMNS;

export const initialState = { data: [], loaded: false, failed: false };

const blockColumns = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };
    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };
    default:
      return state;
  }
};

export default blockColumns;
