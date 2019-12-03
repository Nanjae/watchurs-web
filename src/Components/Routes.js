import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LeagueRanking from "../Routes/League/LeagueRanking";
import LeagueFavorites from "../Routes/League/LeagueFavorites";
import LeagueContest from "../Routes/League/LeagueContest";
import AuthLogin from "../Routes/Auth/AuthLogin";

const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={LeagueRanking} />
    <Route exact path="/ranking" component={LeagueRanking} />
    <Route exact path="/favorites" component={LeagueFavorites} />
    <Route exact path="/contest" component={LeagueContest} />
    <Route exact path="/login" component={AuthLogin} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => <DefaultRoute />;

export default AppRouter;
