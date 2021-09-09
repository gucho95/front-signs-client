import { withLazyLoad } from '@hocs';
import { PATHS } from './paths';

const Homepage = withLazyLoad(() => import('@pages/Homepage'));
const Form = withLazyLoad(() => import('@pages/Form'));
const Components = withLazyLoad(() => import('@pages/Components'));
const PageB = withLazyLoad(() => import('@pages/PageB'));
const SignIn = withLazyLoad(() => import('@pages/SignIn'));
const Dashboard = withLazyLoad(() => import('@pages/Dashboard'));
const SinglePage = withLazyLoad(() => import('@pages/SinglePage'));
// DASHBOARD COMPONENTS
const ManageSinglePage = withLazyLoad(() => import('@pages/Dashboard/SinglePage'));
const AddPage = withLazyLoad(() => import('@pages/Dashboard/AddPage'));
const Settings = withLazyLoad(() => import('@pages/Dashboard/Settings'));

export const ROUTES = [
  { id: 1, key: 'Homepage', path: PATHS.HOMEPAGE, component: Components, exact: true, isMenuItem: true },
  { id: 2, key: 'SignIn', path: PATHS.SIGN_IN, component: SignIn, isMenuItem: true },
  { id: 3, key: 'Dashboard', path: PATHS.DASHBOARD, component: Dashboard, isMenuItem: true },
  { id: 4, key: 'Single Page', path: PATHS.SINGLE_PAGE_VIEW, component: SinglePage },

  // { id: 2, key: 'Components', path: PATHS.COMPONENTS, component: Components },
  // { id: 2, key: 'Form', path: PATHS.FORM, component: Form },
  // { id: 3, key: 'Page B', path: PATHS.PAGE_B, component: PageB },

  ,
];

export const DASHBOARD_ROUTES = [
  { label: 'Single page', path: PATHS.SINGLE_PAGE_MANAGE, component: ManageSinglePage, exact: true, isMenuItem: false },
  { icon: 'icon', label: 'Add page', path: PATHS.ADD_PAGE, component: AddPage, isMenuItem: true },
  { icon: 'icon', label: 'Settings', path: PATHS.SETTINGS, component: Settings, isMenuItem: true },
];
