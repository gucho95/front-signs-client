import { DASHBOARD_ROUTES } from '@constants/routes';
import { DashboardHeader as Header, Sidebar } from '@organisms';
import { DashboardTemplate as Template } from '@templates';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { selectPages, selectPagesMenu } from '@selectors/page';

const bottomMenuData = DASHBOARD_ROUTES.filter((i) => i.isMenuItem);

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
  const pagesMenu = useSelector(selectPagesMenu);
  const SidebarWithProps = () => <Sidebar pagesMenu={pagesMenu} staticMenu={bottomMenuData} />;
  return <Template components={{ Header, Sidebar: SidebarWithProps, Content }} />;
};

export default Dashboard;
