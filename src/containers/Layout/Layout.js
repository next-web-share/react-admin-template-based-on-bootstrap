import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// routes config
import routes from '../../routes';

class Layout extends Component {

  loading = () => <div>Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
