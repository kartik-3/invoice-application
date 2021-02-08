import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login";
import SignUp from "./signup";
import HomePage from "./homepage";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#373737",
    color: "#fff",
    height: "100vh",
    padding: 0,
  },
  title: {
    fontSize: 60,
    fontWeight: "bolder",
    textAlign: "center",
  },
  m5: {
    margin: 5,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Grid container className={classes.root}>
          <Grid item xs></Grid>
          <Grid item xs>
            <p className={classes.title}>Invoice Application</p>
            <Grid container>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.m5}
                >
                  {/* <Link className={classes.link} to="/login"> */}
                  Login
                  <HomePage
                    linkTo={<Link className={classes.link} to="/login"></Link>}
                  ></HomePage>
                  {/* </Link> */}
                </Button>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  className={classes.m5}
                >
                  <Link className={classes.link} to="/signup">
                    Sign Up
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Switch>
          {/* <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
