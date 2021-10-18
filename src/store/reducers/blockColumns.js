import { BLOCK_COLUMNS } from '@store/actionTypes';
const { ADD, REMOVE, UPDATE_INDEX } = BLOCK_COLUMNS;

export const initialState = { data: [], loaded: false, failed: false };

const blockColumns = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return { ...state, data: [...state.data, payload] };
    case REMOVE:
      return { ...state, data: state.data.filter((p) => p.id !== payload) };
    case UPDATE_INDEX:
      return {
        ...state,
        data: state.data.map((item) => {
          const newData = payload.find((newItem) => newItem.i === item.id);
          const newIndex = newData?.x;
          return newIndex !== undefined ? { ...item, index: newIndex } : item;
        }),
      };
    default:
      return state;
  }
};

export default blockColumns;
