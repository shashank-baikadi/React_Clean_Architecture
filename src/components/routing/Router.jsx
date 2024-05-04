// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { routes } from './routes';

// const Router = () => (
//   <Switch>
//     {routes.map((route, index) => (
//       <Route key={index} path={route.path} exact={route.exact} component={route.component} />
//     ))}
//   </Switch>
// );

// export default Router;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { routes } from './routes';

// const Router = () => (
//   <Routes>
//     {routes.map((route, index) => (
//       <Route key={index} path={route.path} element={React.createElement(route.component)} />
//     ))}
//   </Routes>
// );

// export default Router;

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  </Suspense>
);

export default Router;