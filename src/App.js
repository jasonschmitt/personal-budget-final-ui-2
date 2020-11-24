import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./pages/test";
import TestTwo from "./pages/testtwo";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  console.log("app");
  axios
    .get(`http://localhost:8081/test`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/testtwo">
          <TestTwo />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
