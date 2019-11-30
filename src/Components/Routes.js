import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/League/LeagueRank/LeagueRank";

const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => <DefaultRoute />;

export default AppRouter;
