const DASHBOARD_PATHS = {
  SINGLE_PAGE: '/dashboard/pages/:page',
  SETTINGS: '/dashboard/settings',
};

export const PATHS = {
  HOMEPAGE: '/',
  SIGN_IN: '/sign-in',
  DASHBOARD: '/dashboard',
  // MOCK
  COMPONENTS: '/components',
  FORM: '/form',
  PAGE_B: '/page-b',
  ...DASHBOARD_PATHS,
};

export const generateSinglePagePath = (path) => `/dashboard/pages/${path}`;
