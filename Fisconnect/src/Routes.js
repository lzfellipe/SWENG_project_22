import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Freelancers from"./containers/Freelancers";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home">
            <Home />    
        </Route>
        <Route path="/freelancers">
            <Freelancers />
      </Route>
    </Switch>
  );
}