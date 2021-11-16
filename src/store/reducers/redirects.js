import { REDIRECTS } from '@store/actionTypes';
const { FIND, REMOVE, CREATE, UPDATE } = REDIRECTS;
const initialState = { data: [], loaded: false, failed: false };

const redirects = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [FIND.LOAD, UPDATE.LOAD, CREATE.LOAD, REMOVE.LOAD].includes(type):
      return { ...state, loaded: false };

    case [FIND.FAIL, UPDATE.FAIL, CREATE.FAIL, REMOVE.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };

    case [FIND.SUCCESS].includes(type):
      return { ...state, data: response?.data, loaded: true };

    case [CREATE.SUCCESS].includes(type):
      return {
        ...state,
        data: { rows: [...state.data.rows, response?.data], count: state.data.count + 1 },
        loaded: true,
      };

    case [REMOVE.SUCCESS].includes(type):
      return {
        ...state,
        data: { rows: state.data.rows.filter((i) => i.id !== response.params.id), count: state.data.count - 1 },
        loaded: true,
      };

    case [FIND.RESET].includes(type):
      return initialState;
    default:
      return state;
  }
};

export default redirects;
