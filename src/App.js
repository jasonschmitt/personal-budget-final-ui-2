import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./pages/home";
import TestTwo from "./pages/testtwo";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: {},
  };

  componentDidMount() {
    console.log("it mounted");
    this.checkLoggedInStatus();
  }

  checkLoggedInStatus() {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      this.setState({ isLoggedIn: true });
      const token = localStorage.getItem("token");
      const user_id = localStorage.getItem("_id");

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `JWT ${token}`,
      };

      let baseURL =
        window.location.hostname === "localhost"
          ? "http://localhost:8081"
          : "https://personal-budget-api.herokuapp.com";

      axios
        .get(`${baseURL}/user/${user_id}`, {
          headers: headers,
        })
        .then((response) => {
          // console.log(response.data)
          this.setState({ user: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  // let baseURL =
  //   window.location.hostname === "localhost"
  //     ? "http://localhost:8081"
  //     : "https://personal-budget-api.herokuapp.com";

  // axios
  //   .get(`${baseURL}/test`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  getData = () => {
    console.log(this.state);
  };
  render() {
    return (
      <Router>
        <button onClick={this.getData}>get the state</button>
        {this.state.isLoggedIn ? (
          <div>is logged in: true</div>
        ) : (
          <div>is logged in: false</div>
        )}

        <Nav isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Home isLoggedIn={this.state.isLoggedIn} globalState={this.state} />
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
}

export default App;
