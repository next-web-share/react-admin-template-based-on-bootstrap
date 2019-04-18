import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../Header';
import AppSidebar from '../Sidebar';
import AppSidebarHeader from '../SidebarHeader';
import AppSidebarForm from '../SidebarForm';
import AppSidebarNav from '../SidebarNav';
import AppSidebarFooter from '../SidebarFooter';
import AppSidebarMinimizer from '../SidebarMinimizer';
import AppFooter from '../Footer';

// routes config
import routes from '../../routes';

// sidebar nav config
import navigation from '../../_nav';

// components
const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));

class Layout extends Component {
  loading = () => <div>Loading...</div>

  signOut(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <Header onLogout={e => this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
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
