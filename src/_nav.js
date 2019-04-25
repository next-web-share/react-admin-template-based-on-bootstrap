export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer',
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
      icon: 'fa fa-eyedropper',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'fa fa-pencil',
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
      icon: 'fa fa-puzzle-piece',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'fa fa-puzzle-piece',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'fa fa-location-arrow',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'fa fa-location-arrow',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'fa fa-location-arrow',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'fa fa-location-arrow',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'fa fa-pie-chart',
    },
    {
      name: 'Editors',
      url: '/editors',
      icon: 'fa fa-code',
      children: [
        {
          name: 'Code Editors',
          url: '/editors/code-editors',
          icon: 'fa fa-code',
        },
        {
          name: 'Text Editors',
          url: '/editors/text-editors',
          icon: 'fa fa-code',
        },
      ],
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'fa fa-edit',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
          icon: 'fa fa-edit',
        },
        {
          name: 'Advanced Forms',
          url: '/forms/advanced-forms',
          icon: 'fa fa-edit',
        },
        {
          name: 'Validation',
          url: '/forms/validation-forms',
          icon: 'fa fa-edit',
        },
      ],
    },
    {
      name: 'Google Maps',
      url: '/google-maps',
      icon: 'fa fa-map',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'fa fa-star',
      children: [
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'fa fa-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'fa fa-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'fa fa-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'fa fa-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'fa fa-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'fa fa-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'fa fa-bell',
        },
        {
          name: 'Toastr',
          url: '/notifications/toastr',
          icon: 'fa fa-bell',
        },
      ],
    },
    {
      name: 'Plugins',
      url: '/plugins',
      icon: 'fa fa-bolt',
      children: [
        {
          name: 'Calendar',
          url: '/plugins/calendar',
          icon: 'fa fa-bolt',
        },
        {
          name: 'Draggable',
          url: '/plugins/draggable',
          icon: 'fa fa-bolt',
        },
        {
          name: 'Spinners',
          url: '/plugins/spinners',
          icon: 'fa fa-bolt',
        },
      ],
    },
    {
      name: 'Tables',
      url: '/tables',
      icon: 'fa fa-table',
      children: [
        {
          name: 'Data Table',
          url: '/tables/data-table',
          icon: 'fa fa-table',
        },
        {
          name: 'Tables',
          url: '/tables/tables',
          icon: 'fa fa-table',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'fa fa-calculator',
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
      icon: 'fa fa-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'fa fa-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'fa fa-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'fa fa-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'fa fa-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'fa fa-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download Reactjs UI',
      url: 'https://github.com/reactjsui/react-admin-template-based-on-bootstrap',
      icon: 'fa fa-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
