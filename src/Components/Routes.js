import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home/Home";

export const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);
