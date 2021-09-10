import { BrowserRouter, Switch } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { isAuthedUser } from '@selectors/user';
import { useSelector } from 'react-redux';
import { getScopeWrapper } from '@constants/scopes';

const RootRouter = () => {
  const isAuthed = useSelector(isAuthedUser);

  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(({ path, exact, scope, component: Component }) => {
          const RouteRenderer = getScopeWrapper(scope);
          return <RouteRenderer key={path} isAuthed={isAuthed} exact={exact} path={path} component={Component} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
