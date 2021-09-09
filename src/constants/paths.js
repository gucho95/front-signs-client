const DASHBOARD_BASE = '/dashboard';

const DASHBOARD_PATHS = {
  SINGLE_PAGE_MANAGE: `${DASHBOARD_BASE}/pages/:page`,
  ADD_PAGE: `${DASHBOARD_BASE}/add-page`,
  SETTINGS: `${DASHBOARD_BASE}/settings`,
};

export const PATHS = {
  HOMEPAGE: '/',
  SIGN_IN: '/sign-in',
  DASHBOARD: '/dashboard',
  SINGLE_PAGE_VIEW: '/:page',
  // MOCK
  COMPONENTS: '/components',
  FORM: '/form',
  PAGE_B: '/page-b',
  ...DASHBOARD_PATHS,
};

export const generateSinglePagePath = (path) => `/dashboard/pages/${path}`;
