import { Navigate } from 'react-router';
import MainLayout from '@Layouts/MainLayout';
import * as Page from '@Pages';
import * as Error from '@Errors';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        label: "Home",
        element: <Page.HomePage />
      },
      {
        path: 'signin',
        label: "Sign In",
        element: <Page.SignInPage />
      },
      {
        path: 'signup',
        label: "Sign Up",
        element: <Page.SignUpPage />
      },
      {
        path: 'about',
        label: "About",
        element: <Page.AboutPage />
      },
      {
        path: 'profile/:pseudo',
        label: "Mon Profil",
        element: <Page.ProfilePage />,
      },
      {
        path: 'not-found',
        label: "Erreur 404",
        element: <Error.NotFoundPage />,
        hideInMenu: true
      },
      {
        path: 'unauthorized',
        label: "Unauthorized",
        element: <Error.UnauthorizedPage />,
        hideInMenu: true
      },
      {
        path: '*',
        label: "Inconnu",
        element: <Navigate to="/not-found" replace />,
        hideInMenu: true
      },
    ]
  }
];

export default routes;