import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import TestTwo from "./pages/testtwo";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  console.log("app");
  let baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:8081"
      : "https://personal-budget-api.herokuapp.com";

  axios
    .get(`${baseURL}/test`)
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
          <Home />
        </Route>
        <Route exact path="/testtwo">
          <TestTwo />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
