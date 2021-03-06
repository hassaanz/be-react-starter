import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FourOhFour from './pages/404';
import { WithNav } from './components/Nav';
import Components from './components';

const {
  Home,
  About,
} = Components;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WithNav(Dashboard)} />
      <Route exact path="/home" component={WithNav(Home)} />
      <Route exact path="/about" component={WithNav(About)} />
      <Route exact path="/404" component={FourOhFour} />
    </Switch>
  );
};

export default Routes;
