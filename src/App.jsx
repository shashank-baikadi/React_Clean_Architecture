
// import './App.css'
// import RegisterForm from './components/registrationform/RegisterForm'
// import Router from './components/routing/Router'

// import UserForm from './components/userform/UserForm'

// function App() {
 

//   return (
//     <>
//      {/* <UserForm/>
//      <RegisterForm/> */}
//      <Router />
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './components/routing/Router';

const App = () => (


  <Router>
    <RouterConfig />
  </Router>
);

export default App;