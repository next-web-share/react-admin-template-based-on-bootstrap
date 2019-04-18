export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-car',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: { // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '' // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'fa fa-car',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'fa fa-car',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'fa fa-car',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'fa fa-car',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'fa fa-car',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'fa fa-car',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'fa fa-car',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'fa fa-car',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'fa fa-car',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'fa fa-car',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'fa fa-car',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'fa fa-car',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'fa fa-car',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'fa fa-car',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'fa fa-car',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'fa fa-car',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'fa fa-car',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'fa fa-car',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'fa fa-car',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'fa fa-car',
    },
    {
      name: 'Editors',
      url: '/editors',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Code Editors',
          url: '/editors/code-editors',
          icon: 'fa fa-car',
        },
        {
          name: 'Text Editors',
          url: '/editors/text-editors',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
          icon: 'fa fa-car',
        },
        {
          name: 'Advanced Forms',
          url: '/forms/advanced-forms',
          icon: 'fa fa-car',
        },
        {
          name: 'Validation',
          url: '/forms/validation-forms',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Google Maps',
      url: '/google-maps',
      icon: 'fa fa-car',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'fa fa-car',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'fa fa-car',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'fa fa-car',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'fa fa-car',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'fa fa-car',
        },
        {
          name: 'Toastr',
          url: '/notifications/toastr',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Plugins',
      url: '/plugins',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Calendar',
          url: '/plugins/calendar',
          icon: 'fa fa-car',
        },
        {
          name: 'Draggable',
          url: '/plugins/draggable',
          icon: 'fa fa-car',
        },
        {
          name: 'Spinners',
          url: '/plugins/spinners',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Tables',
      url: '/tables',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Data Table',
          url: '/tables/data-table',
          icon: 'fa fa-car',
        },
        {
          name: 'Tables',
          url: '/tables/tables',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'fa fa-car',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Extras',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'fa fa-car',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'fa fa-car',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'fa fa-car',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'fa fa-car',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'fa fa-car',
      attributes: { disabled: true },
    },
    {
      name: 'Download Reactjs UI',
      url: 'https://github.com/reactjsui/react-admin-template-based-on-bootstrap',
      icon: 'fa fa-car',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
