import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

export const PublicRoute = Route

export const AuthenticatedRoute = observer((props: RouteProps) => {
  const { auth } = useStore()

  if (!auth.token) {
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
})