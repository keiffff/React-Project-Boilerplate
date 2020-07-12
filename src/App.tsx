import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Articles } from 'pages/Articles';
import { Profile } from 'pages/Profile';
import { routes } from 'constants/routes';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.home} exact>
        <Home />
      </Route>
      <Route path={routes.articles}>
        <Articles />
      </Route>
      <Route path={routes.profile}>
        <Profile />
      </Route>
      <Redirect to={routes.home} />
    </Switch>
  </BrowserRouter>
);
