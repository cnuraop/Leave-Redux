import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/"
              render={props => (
                <React.Fragment>
                  <Header />
                </React.Fragment>
              )}
            />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
