import { lazy } from 'react';
const userform = lazy(() => import('../components/userform/UserForm.jsx'));
const registerform = lazy(() => import('../components/registrationform/RegisterForm.jsx'));
// const  RequestForLoan= lazy(() => import('../pages/Loans/RequestForLoan.jsx'));
const Loan= lazy(() => import('../pages/loan/Loan.jsx'));
// const LoanGet= lazy(() => import('../pages/loan_get/LoanGetComponent.jsx'));
const LoanGet= lazy(() => import('../pages/loan_get/LoanGetComponent.jsx'));
// export default LoanGetComponentLazy;

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
  // {
  //   path: '/loan',
  //   component: RequestForLoan,
  //   exact: true,
  // },
  {
    path: '/loans',
    component: Loan,
    exact: true,
  },
  {
    path: '/loanGet',
    component: LoanGet,
    exact: true,
  },

];