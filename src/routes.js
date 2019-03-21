import React from 'react';
import Layout from './containers/Layout';

const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
];

export default routes;
