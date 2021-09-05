import { Heading } from '@atoms';
import { PATHS, generateSinglePagePath } from '@constants/paths';
import { DASHBOARD_ROUTES } from '@constants/routes';
import { DashboardHeader as Header, Sidebar } from '@organisms';
import { DashboardTemplate as Template } from '@templates';
import { Route, Switch } from 'react-router';

const menuItemData = [
  { icon: 'Icon', label: 'Page 1', count: 11, path: generateSinglePagePath('page-1') },
  { icon: 'Icon', label: 'Page 2', count: 8, path: generateSinglePagePath('page-2') },
  { icon: 'Icon', label: 'Page 3', count: 333, path: generateSinglePagePath('page-3') },
  { icon: 'Icon', label: 'Page 4', count: null, path: generateSinglePagePath('page-4') },
  { icon: 'Icon', label: 'Settings', count: null, path: PATHS.SETTINGS },
  { icon: 'Icon', label: 'Sign out', count: null, path: PATHS.SIGN_IN },
];

const Content = () => (
  <div className='min-h-full bg-grey-body'>
    <div className='py-7 px-12'>
      <Switch>
        {DASHBOARD_ROUTES.map(({ path, exact, component: Component }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
      </Switch>
    </div>
  </div>
);

const Dashboard = () => {
  const SidebarWithProps = () => <Sidebar data={menuItemData} />;
  return <Template components={{ Header, Sidebar: SidebarWithProps, Content }} />;
};

export default Dashboard;
