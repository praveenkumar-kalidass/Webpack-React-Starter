import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./Components/App";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Friends from "./Components/Friends";

export default (
  <Router basename="/">
  <Route path="/">
    <AppContainer>
      <Route path="/app" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/friends" component={Friends} />
    </AppContainer>
  </Route>
);
