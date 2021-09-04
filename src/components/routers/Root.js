import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      {ROUTES.map(({ path, exact, component: Component }) => (
        <Route key={path} exact={exact} path={path} component={Component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
