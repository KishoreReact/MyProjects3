// App.js
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../routes";
import Login from "../Login/Login";

// const Home = lazy(() => import("./pages/Home"));
// const Pages = lazy(() => import("./pages/Pages"));
//const UserAccount = lazy(() => import("./pages/UserAccount"));
//const Login = lazy(() => import("../Login/Login"));

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path={ROUTES.home} component={Home} />
        <Route path={ROUTES.pages} component={Pages} />
        <Route path={ROUTES.UserAccount} component={UserAccount} /> */}
        <Route path={ROUTES.signUp} component={Login} />
      </Switch>
    </Suspense>
  );
};

export default Main;
