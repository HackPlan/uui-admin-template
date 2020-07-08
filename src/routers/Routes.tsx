import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { store } from '../store';

export const PublicRoute = Route;

export const AuthenticatedRoute = (props: RouteProps) => {
  const [auth] = useRecoilState(store.Auth)
  if (!auth) {
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