export const BUTTONS = [
    {
        title: 'ACASA',
        path: '/dashboard/homepage',
        login: false,
        roles: ['ROLE_ADMIN', 'ROLE_USER']
    },
    {
        title: 'DASHBOARD',
        path: '/dashboard/app',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'USERI',
        path: '/dashboard/user',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'PARTENERII',
        path: '/dashboard/company',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'PRODUSE',
        path: '/dashboard/Products',
        login: false,
        roles: ['ROLE_USER']
    },
    {
        title: 'NOUTATII',
        path: '/dashboard/blog',
        login: false,
        roles: ['ROLE_USER']
    },
    {
        title: 'CONTUL MEU',
        path: '/dashboard/contulMeu',
        login: true,
        roles: ['ROLE_USER']
    },

    /*  {
        title: 'login',
        path: '/login',
        icon: getIcon('eva:lock-fill')
      },
      {
        title: 'register',
        path: '/register',
        icon: getIcon('eva:person-add-fill')
      },
      {
        title: 'Not found',
        path: '/404',
        icon: getIcon('eva:alert-triangle-fill')
      }*/
];