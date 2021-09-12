const DASHBOARD_BASE = '/dashboard';

const DASHBOARD_PATHS = {
  SINGLE_PAGE_MANAGE: `${DASHBOARD_BASE}/pages/:page`,
  ADD_WIDGET: `${DASHBOARD_BASE}/pages/:page/add-widget`,
  ADD_PAGE: `${DASHBOARD_BASE}/add-page`,
  SETTINGS: `${DASHBOARD_BASE}/settings`,
};

export const PATHS = {
  HOMEPAGE: '/',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
  DASHBOARD: '/dashboard',
  SINGLE_PAGE_VIEW: '/pages/:page',
  // MOCK
  COMPONENTS: '/components',
  FORM: '/form',
  PAGE_B: '/page-b',
  ...DASHBOARD_PATHS,
};

export const generateSinglePagePath = (path) => `/dashboard/pages/${path}`;
