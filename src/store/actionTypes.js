const generate = (actionName) => ({
  WATCH: `${actionName}__WATCH`,
  LOAD: `${actionName}__LOAD`,
  FAIL: `${actionName}__FAIL`,
  SUCCESS: `${actionName}__SUCCESS`,
  RESET: `${actionName}__RESET`,
});

export const generateCrud = ({ actionName }) => ({
  FIND: generate(`FIND__${actionName}`),
  FIND_ONE: generate(`FIND_ONE__${actionName}`),
  CREATE: generate(`CREATE__${actionName}`),
  UPDATE: generate(`UPDATE__${actionName}`),
  REMOVE: generate(`REMOVE__${actionName}`),
});

export const AUTH = { SIGN_IN: generate('SIGN_IN'), SIGN_OUT: generate('SIGN_OUT') };

export const PAGES = {
  ADD: 'ADD_PAGE',
  UPDATE: 'UPDATE_PAGE',
  REMOVE: 'REMOVE_PAGE',
};

export const PAGE_WIDGETS = {
  ADD: 'ADD_PAGE_WIDGET',
  UPDATE: 'UPDATE_PAGE_WIDGET',
  REMOVE: 'REMOVE_PAGE_WIDGET',
  DUPLICATE: 'DUPLICATE_PAGE_WIDGET',
};

// UI ACTIONS
export const MODALS = {
  OPEN: 'OPEN_MODAL',
  CLOSE: 'CLOSE_MODAL',
};
