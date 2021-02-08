import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import SignUp from "./signup";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Router>
        {props.linkTo}
        <Switch>
          {/* <Route
            exact
            path={props.routePath}
          >
            {props.routeComponent}
          </Route> */}
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default HomePage;
