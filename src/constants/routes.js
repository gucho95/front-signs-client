import { withLazyLoad } from '@hocs';
import { PATHS } from './paths';
import { ROUTE_SCOPES } from './scopes';
const { AUTHED, UN_AUTHED } = ROUTE_SCOPES;

const Components = withLazyLoad(() => import('@pages/Components'));
const SignIn = withLazyLoad(() => import('@pages/Authorization/SignIn'));
const SignOut = withLazyLoad(() => import('@pages/Authorization/SignOut'));
const Dashboard = withLazyLoad(() => import('@pages/Dashboard'));
const SinglePage = withLazyLoad(() => import('@pages/SinglePage'));

// DASHBOARD COMPONENTS
const ManageSinglePage = withLazyLoad(() => import('@pages/Dashboard/SinglePage'));
const AddPage = withLazyLoad(() => import('@pages/Dashboard/AddPage'));
const Settings = withLazyLoad(() => import('@pages/Dashboard/Settings'));

export const ROUTES = [
  { id: 1, key: 'Homepage', path: PATHS.HOMEPAGE, component: Components, exact: true, isMenuItem: true },
  { id: 2, key: 'SignIn', path: PATHS.SIGN_IN, component: SignIn, isMenuItem: true, scope: UN_AUTHED },
  { id: 3, key: 'Dashboard', path: PATHS.DASHBOARD, component: Dashboard, isMenuItem: true, scope: AUTHED },
  { id: 4, key: 'Sign out', path: PATHS.SIGN_OUT, component: SignOut, scope: AUTHED },
  { id: 5, key: 'Single Page', path: PATHS.SINGLE_PAGE_VIEW, component: SinglePage },
];

export const DASHBOARD_ROUTES = [
  { label: 'Single page', path: PATHS.SINGLE_PAGE_MANAGE, component: ManageSinglePage, exact: true, isMenuItem: false },
  { icon: 'icon', label: 'Add page', path: PATHS.ADD_PAGE, component: AddPage, isMenuItem: true },
  { icon: 'icon', label: 'Settings', path: PATHS.SETTINGS, component: Settings, isMenuItem: true },
];
