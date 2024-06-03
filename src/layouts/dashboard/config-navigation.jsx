import SvgColor from 'src/components/svg-color';

import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillHouseCheckFill, BsBasket } from 'react-icons/bs';
import { MdOutlineSupportAgent } from 'react-icons/md';
// import {  } from 'react-icons/bs';
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
    icon: (
      <AiTwotoneHome
        style={{
          fontSize: '24px',
        }}
      />
    ),
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
    icon: (
      <BsFillHouseCheckFill
        style={{
          fontSize: '24px',
        }}
      />
    ),
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
      {
        title: 'Add Global Features',
        path: 'post-features-logo',
        icon: icon('ic_lock'),
      },
    ],
  },
  {
    title: 'Agent Management',
    icon: (
      <MdOutlineSupportAgent
        style={{
          fontSize: '24px',
        }}
      />
    ),
    items: [
      {
        title: 'All Agents',
        path: '/blog',
        icon: icon('ic_cart'),
      },
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
    icon: (
      <BsBasket
        style={{
          fontSize: '24px',
        }}
      />
    ),
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
