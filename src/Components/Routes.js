import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/League/LeagueRank/LeagueRank";
import Riot from "../Routes/Riot";

const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/riot.txt/" component={Riot} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => <DefaultRoute />;

export default AppRouter;
