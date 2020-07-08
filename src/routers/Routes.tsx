import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { store } from '../store';

export const PublicRoute = Route;

export const AuthenticatedRoute = (props: RouteProps) => {
  const isLogin = useRecoilValue(store.isLogin)
  if (!isLogin) {
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