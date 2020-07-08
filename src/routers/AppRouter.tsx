import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes } from '../route.config';

export function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map((i) => {
          return (
            <i.route key={i.key} path={i.path}>
              <i.layout>
                {i.content}
              </i.layout>
            </i.route>
          )
        })}
      </Switch>
    </Router>
  );
}
