import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
import './App.scss';

import Layout from './containers/Layout';
// Containers


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Layout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
