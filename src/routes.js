import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/footer" component={Footer} />
  </Switch>
);
