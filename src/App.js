import logo from "./logo.svg";
import "./App.css";
import Test from "./pages/test";
import TestTwo from "./pages/testtwo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/testtwo">
          <TestTwo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
