import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import { PublicRoute, AuthenticatedRoute } from './Routes';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <AuthenticatedRoute path="/form">
          <AppLayout>
            <div>form</div>
          </AppLayout>
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/">
          <AppLayout>
            <Home />
          </AppLayout>
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}
