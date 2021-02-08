import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    color: "#000000",
    textDecoration: "none",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs>
          login
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default Login;
