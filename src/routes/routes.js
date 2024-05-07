import { lazy } from 'react';
const userform = lazy(() => import('../components/userform/UserForm.jsx'));
const registerform = lazy(() => import('../components/registrationform/RegisterForm.jsx'));


export const routes = [
    {
        path: '/',
        component: registerform,
        exact: false,
      },
  {
    path: '/userform',
    component: userform,
    exact: true,
  },

];