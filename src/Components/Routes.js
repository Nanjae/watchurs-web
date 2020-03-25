import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LeagueHome from "../Routes/League/LeagueHome/LeagueHome";
import LeagueRank from "../Routes/League/LeagueRank/LeagueRank";
import LeagueDetail from "../Routes/League/LeagueDetail/LeagueDetail";
import LeagueContest from "../Routes/League/LeagueContest/LeagueContest";
import Request from "../Routes/Common/Request";
import List from "../Routes/Common/List";
import SearchNull from "../Routes/Common/SearchNull";
// import FirstRanking from "../Routes/League/LeagueRanking/FirstRanking";
// import LeagueFavorites from "../Routes/League/LeagueFavorites";
// import LeagueContest from "../Routes/League/LeagueContest";
// import AuthLogin from "../Routes/Auth/AuthLogin";
// import SecondRanking from "../Routes/League/LeagueRanking/SecondRanking";

export const DefaultRoute = () => (
  <Switch>
    <Route exact path="/" component={LeagueHome} />
    <Route exact path="/home" component={LeagueHome} />
    <Route exact path="/rank/all/:page" component={LeagueRank} />
    <Route exact path="/rank/twitch/:page" component={LeagueRank} />
    <Route exact path="/rank/afreeca/:page" component={LeagueRank} />
    <Route exact path="/contest/all" component={LeagueContest} />
    <Route exact path="/request" component={Request} />
    <Route exact path="/detail/:bId/*" component={LeagueDetail} />
    <Route exact path="/common/request" component={Request} />
    <Route exact path="/common/search/null" component={SearchNull} />
    <Route exact path="/common/list" component={List} />
    <Redirect from="*" to="/" />
  </Switch>
);
