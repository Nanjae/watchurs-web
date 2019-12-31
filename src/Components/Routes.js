import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LeagueHome from "../Routes/League/LeagueHome";
// import FirstRanking from "../Routes/League/LeagueRanking/FirstRanking";
// import LeagueFavorites from "../Routes/League/LeagueFavorites";
// import LeagueContest from "../Routes/League/LeagueContest";
// import AuthLogin from "../Routes/Auth/AuthLogin";
// import SecondRanking from "../Routes/League/LeagueRanking/SecondRanking";

export const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={LeagueHome} />
    {/* <Route exact path="/ranking" component={FirstRanking} />
    <Route exact path="/ranking/1" component={FirstRanking} /> */}
    {/* <Route exact path="/ranking/2" component={SecondRanking} /> */}
    {/* <Route exact path="/favorites" component={LeagueFavorites} />
    <Route exact path="/contest" component={LeagueContest} />
    <Route exact path="/login" component={AuthLogin} /> */}
    <Redirect from="*" to="/" />
  </Switch>
);
