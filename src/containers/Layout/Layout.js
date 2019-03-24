import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import SidebarNav from './SidebarNav';

// routes config
import routes from '../../routes';

// sidebar nav config
import navigation from '../../_nav';

class Layout extends Component {
  loading = () => <div>Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <SidebarNav navConfig={navigation} {...this.props} />
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
