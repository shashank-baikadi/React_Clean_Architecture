import { lazy } from 'react';
const userform = lazy(() => import('../userform/UserForm'));
const registerform = lazy(() => import('../registrationform/RegisterForm'));


export const routes = [
    {
        path: '/',
        component: registerform,
        exact: true,
      },
  {
    path: '/userform',
    component: userform,
    exact: true,
  },

];