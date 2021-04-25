import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Registration from "./components/registration";
import Login from "./components/login";
import HomePage from "./components/homePage";
import PageNotFound from "./components/pageNotFound";
import "./App.css";


class App extends Component {
  
  render() {
    return (
      <>
        <Switch>
          <Route path="/login" exact render={(props) => <Login  {...props} />} />
          <Route
            path="/register"
            exact
            render={(props) => <Registration  {...props} />}
          />
          <Route path="/home" exact render={(props) => <HomePage  {...props} />} />
          <Route
            path="/not-found"
            render={(props) => <PageNotFound {...props} />}
          />
          <Redirect from="/" exact to="/register" />
          <Redirect to="/not-found" />
        </Switch>
      </>
    );
  }
}

export default App;
