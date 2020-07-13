import React, { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../route.config';
import { groupBy } from 'lodash';

export function AppRouter() {
  const groupedRoutes = useMemo(() => {
    return groupBy(routes, (i) => i.layout)
  }, [])

  return (
    <Router>
      <Switch>
        {Object.values(groupedRoutes).map((items) => {
          const Layout = items[0].layout
          const paths = items.map((i) => i.path)
          return (
            <Route key={Layout.name} path={paths} exact>
              <Layout>
                <Switch>
                  {items.map((i) => {
                    return (
                      <i.route key={i.key} path={i.path} exact>
                        {i.content}
                      </i.route>
                    )
                  })}
                </Switch>
              </Layout>
            </Route>
          )
        })}
        <Redirect from='*' to='/404' />
      </Switch>
    </Router>
  );
}
