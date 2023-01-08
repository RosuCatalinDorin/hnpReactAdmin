export const BUTTONS = [
    {
        title: 'Acasa',
        path: '/dashboard/homepage',
        login: false,
        roles: ['ROLE_ADMIN', 'ROLE_USER']
    },
    {
        title: 'Dashboard',
        path: '/dashboard/app',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'Useri',
        path: '/dashboard/user',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'Partenerii',
        path: '/dashboard/company',
        login: true,
        roles: ['ROLE_ADMIN']
    },
    {
        title: 'Produse',
        path: '/dashboard/Products',
        login: false,
        roles: ['ROLE_USER']
    },
    {
        title: 'Noutatii',
        path: '/dashboard/blog',
        login: false,
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