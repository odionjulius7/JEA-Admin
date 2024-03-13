import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Property Management',
    icon: icon('ic_cart'),
    items: [
      {
        title: 'All Properties',
        path: '/property-list',
        icon: icon('ic_cart'),
      },
      // {
      //   title: 'Properties',
      //   path: 'property-products',
      //   icon: icon('ic_user'),
      // },
      {
        title: 'Post Property',
        path: '/post-property',
        icon: icon('ic_cart'),
      },
    ],
  },
  {
    title: 'Project Management',
    icon: icon('shape-avatar'),
    items: [
      {
        title: 'All Projects',
        path: '/projects',
        icon: icon('ic_cart'),
      },
      {
        title: 'Post Project',
        path: '/post-project',
        icon: icon('ic_cart'),
      },
    ],
  },
  {
    title: 'Agent Management',
    icon: icon('ic_blog'),
    items: [
      // {
      //   title: 'All Blogs',
      //   path: '/blog',
      //   icon: icon('ic_cart'),
      // },
      {
        title: 'Post Agent',
        path: '/post-blog',
        icon: icon('ic_cart'),
      },
    ],
  },
  {
    title: 'All Requests',
    path: 'all-requests',
    icon: icon('ic_lock'),
  },
  {
    title: 'Features And Icons',
    path: 'post-features-logo',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Property Requested',
  //   path: 'single-property',
  //   icon: icon('ic_lock'),
  // },
  {
    title: 'account',
    path: 'account',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'User Recorded Loans',
  //   path: 'user-recorded-loans',
  //   icon: icon('ic_user'),
  // },

  // {
  //   title: 'loans',
  //   path: '/loans',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'loan repayment',
  //   path: '/loan-repayment',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'user management',
  //   path: '/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'A Property Page',
  //   path: 'blog',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'A Project Page',
  //   path: 'blog',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'A Blog Page',
  //   path: 'blog',
  //   icon: icon('ic_user'),
  // },
];

export default navConfig;
