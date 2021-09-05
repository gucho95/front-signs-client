import { withLazyLoad } from '@hocs';
import { PATHS } from './paths';

const Homepage = withLazyLoad(() => import('@pages/Homepage'));
const Form = withLazyLoad(() => import('@pages/Form'));
const Components = withLazyLoad(() => import('@pages/Components'));
const PageB = withLazyLoad(() => import('@pages/PageB'));
const SignIn = withLazyLoad(() => import('@pages/SignIn'));
const Dashboard = withLazyLoad(() => import('@pages/Dashboard'));
// DASHBOARD COMPONENTS
const SinglePage = withLazyLoad(() => import('@pages/Dashboard/SinglePage'));
const Settings = withLazyLoad(() => import('@pages/Dashboard/Settings'));

export const ROUTES = [
  { id: 1, key: 'Homepage', path: PATHS.HOMEPAGE, component: Components, exact: true },
  { id: 2, key: 'SignIn', path: PATHS.SIGN_IN, component: SignIn },
  { id: 3, key: 'Dashboard', path: PATHS.DASHBOARD, component: Dashboard },
  // { id: 2, key: 'Components', path: PATHS.COMPONENTS, component: Components },
  // { id: 2, key: 'Form', path: PATHS.FORM, component: Form },
  // { id: 3, key: 'Page B', path: PATHS.PAGE_B, component: PageB },
];

export const DASHBOARD_ROUTES = [
  { key: 'Single Page', path: PATHS.SINGLE_PAGE, component: SinglePage, exact: true },
  { key: 'Settings', path: PATHS.SETTINGS, component: Settings },
];
