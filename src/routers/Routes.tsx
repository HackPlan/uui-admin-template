import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

export const PublicRoute = Route;

export const AuthenticatedRoute = (props: RouteProps) => {
  // TODO: implement authenticated check
  if (false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
  }

  return (
    <Route {...props} />
  )
}