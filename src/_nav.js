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
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
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
  ],
};
