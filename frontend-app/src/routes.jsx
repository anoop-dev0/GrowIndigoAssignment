import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/logIn";
import Register from "./components/register";
import PhoneAuth from "./components/PhoneAuth";
const routes = () => {
    return (
      <Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/auth" component={PhoneAuth}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </Fragment>
    );
  };
  export default routes;