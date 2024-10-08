import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import EditPropertyImages from 'src/pages/EditPropertyImages';
import EditProjectImages from 'src/pages/EditProjectsImages';

import ProtectedRoute from './ProtectedRoute'; // Ensure proper spacing

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const PostBlogPage = lazy(() => import('src/pages/post-blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const PropertiesPage = lazy(() => import('src/pages/properties'));
export const PostPropertyPage = lazy(() => import('src/pages/postProperty'));
export const PostProjectPage = lazy(() => import('src/pages/post-project'));
export const AccountPage = lazy(() => import('src/pages/account'));
export const ForgotPasswordPage = lazy(() => import('src/pages/forgot-password'));
export const RecoverPasswordPage = lazy(() => import('src/pages/recover-password'));
export const LoanDetailsPage = lazy(() => import('src/pages/loan-details'));
export const UserDetailPage = lazy(() => import('src/pages/userDetail'));
export const ProjectsPage = lazy(() => import('src/pages/projects'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const PropertyPage = lazy(() => import('src/pages/property'));
export const AllRequestsPage = lazy(() => import('src/pages/allRequests'));
export const RequestPage = lazy(() => import('src/pages/singleRequest'));
export const ProjectPage = lazy(() => import('src/pages/project'));
export const SingleBlogPage = lazy(() => import('src/pages/single-blog'));
export const EditPropertyPage = lazy(() => import('src/pages/EditProperty'));
export const FeatureProjectPage = lazy(() => import('src/pages/featureProject'));
export const PostFeaturesNLogoPage = lazy(() => import('src/pages/PostFeaturesNLogo'));
export const EditProjectPage = lazy(() => import('src/pages/EditProject'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: (
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          ),
          index: true,
        },
        {
          path: 'property-list',
          element: (
            <ProtectedRoute>
              <PropertiesPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'post-property',
          element: (
            <ProtectedRoute>
              <PostPropertyPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'post-features-logo',
          element: (
            <ProtectedRoute>
              <PostFeaturesNLogoPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user',
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'edit-property/:id',
          element: (
            <ProtectedRoute>
              <EditPropertyPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'edit-project/:id',
          element: (
            <ProtectedRoute>
              <EditProjectPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'featured-proj/:id',
          element: (
            <ProtectedRoute>
              <FeatureProjectPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'post-project',
          element: (
            <ProtectedRoute>
              <PostProjectPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'all-requests',
          element: (
            <ProtectedRoute>
              <AllRequestsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'single-request/:id',
          element: (
            <ProtectedRoute>
              <RequestPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'account',
          element: (
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'projects',
          element: (
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user/:id',
          element: (
            <ProtectedRoute>
              <UserDetailPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'property/:id',
          element: (
            <ProtectedRoute>
              <PropertyPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'project/:id',
          element: (
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'single-blog/:id',
          element: (
            <ProtectedRoute>
              <SingleBlogPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'property-products',
          element: (
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'blog',
          element: (
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'post-blog',
          element: (
            <ProtectedRoute>
              <PostBlogPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'product-image-edit/:id',
          element: (
            <ProtectedRoute>
              <EditPropertyImages />
            </ProtectedRoute>
          ),
        },
        {
          path: 'project-image-edit/:id',
          element: (
            <ProtectedRoute>
              <EditProjectImages />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'forgot',
      element: <ForgotPasswordPage />,
    },
    {
      path: 'recover',
      element: <RecoverPasswordPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
