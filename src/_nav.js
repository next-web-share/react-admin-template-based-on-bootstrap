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
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
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
  ],
};
