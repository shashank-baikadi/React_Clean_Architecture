import { lazy } from 'react';
const userform = lazy(() => import('../components/userform/UserForm.jsx'));
const registerform = lazy(() => import('../components/registrationform/RegisterForm.jsx'));
const  RequestForLoan= lazy(() => import('../pages/Loans/RequestForLoan.jsx'));

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
  {
    path: '/loan',
    component: RequestForLoan,
    exact: true,
  },

];