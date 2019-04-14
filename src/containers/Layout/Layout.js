import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppSidebarNav from '../SidebarNav';
import AppFooter from '../Footer';

// routes config
import routes from '../../routes';

// sidebar nav config
import navigation from '../../_nav';

// components
const Footer = React.lazy(() => import('./Footer'));

class Layout extends Component {
  loading = () => <div>Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <AppSidebarNav navConfig={navigation} {...this.props} />
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
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <Footer />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default Layout;
