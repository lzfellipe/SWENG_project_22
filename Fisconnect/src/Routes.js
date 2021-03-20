import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Freelancers from "./containers/Freelancers";
import Portfolio from "./containers/Portfolio"
import Register from "./containers/Register"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/freelancers">
        <Freelancers />
      </Route>
      <Route exact path="/freelancers/portfolio/:id">
        <Portfolio />
      </Route>
    </Switch>
  );
}