import { withLazyLoad } from '@hocs';
import { PATHS } from './paths';

const Homepage = withLazyLoad(() => import('@pages/Homepage'));
const Form = withLazyLoad(() => import('@pages/Form'));
const Components = withLazyLoad(() => import('@pages/Components'));
const PageB = withLazyLoad(() => import('@pages/PageB'));

export const ROUTES = [
  { id: 1, key: 'Homepage', path: PATHS.HOMEPAGE, component: Homepage, exact: true },
  { id: 2, key: 'Components', path: PATHS.COMPONENTS, component: Components },
  { id: 2, key: 'Form', path: PATHS.FORM, component: Form },
  { id: 3, key: 'Page B', path: PATHS.PAGE_B, component: PageB },
];
