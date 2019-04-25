import React from 'react';
import Layout from './containers/Layout';

const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Charts = React.lazy(() => import('./views/Charts'));
const CodeEditors = React.lazy(() => import('./views/Editors/CodeEditors'));
const TextEditors = React.lazy(() => import('./views/Editors/TextEditors'));
const BasicForms = React.lazy(() => import('./views/Forms/BasicForms'));
const AdvancedForms = React.lazy(() => import('./views/Forms/AdvancedForms'));
const ValidationForms = React.lazy(() => import('./views/Forms/ValidationForms'));
const GoogleMaps = React.lazy(() => import('./views/GoogleMaps'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Toastr = React.lazy(() => import('./views/Notifications/Toastr'));
const Calendar = React.lazy(() => import('./views/Plugins/Calendar'));
const Draggable = React.lazy(() => import('./views/Plugins/Draggable'));
const Spinners = React.lazy(() => import('./views/Plugins/Spinners'));
const DataTable = React.lazy(() => import('./views/Tables/DataTable'));
const Tables = React.lazy(() => import('./views/Tables/Tables'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', exact: true, name: 'Colors', component: Colors },
  { path: '/theme/typography', exact: true, name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Breadcrumbs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/editors', name: 'Editors', component: CodeEditors },
  { path: '/editors/code-editors', name: 'CodeEditors', component: CodeEditors },
  { path: '/editors/text-editors', name: 'TextEditors', component: TextEditors },
  { path: '/forms/forms', name: 'Forms', component: BasicForms },
  { path: '/forms/basic-forms', name: 'BasicForms', component: BasicForms },
  { path: '/forms/advanced-forms', name: 'AdvancedForms', component: AdvancedForms },
  { path: '/forms/validation-forms', name: 'ValidationForms', component: ValidationForms },
  { path: '/google-maps', name: 'GoogleMaps', component: GoogleMaps },
  { path: '/icons', name: 'Icons', component: Flags },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'FontAwesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'SimpleLineIcons', component: SimpleLineIcons },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toastr', name: 'Toastr', component: Toastr },
  { path: '/plugins/calendar', name: 'Calendar', component: Calendar },
  { path: '/plugins/draggable', name: 'Draggable', component: Draggable },
  { path: '/plugins/spinners', name: 'Spinners', component: Spinners },
  { path: '/tables/data-table', name: 'DataTable', component: DataTable },
  { path: '/tables/tables', name: 'DataTable', component: Tables },
];

export default routes;
