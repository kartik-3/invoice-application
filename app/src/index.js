import React from "react";
import { render } from "react-dom";
import HomePage from "../components/homepage";
import Home from "../components/home";

const App = () => {
  return <HomePage />;
  // return <Home />;
};

render(<App />, document.querySelector("#react-root"));
