/* eslint-disable */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./components/Main";
import LoginScreen from "./components/LoginScreen";
import api from "./api";

class App extends Component {
  state = {}; // FIXME

  render() {
    const { loggedIn } = this.props;

    return (
      <div className="App">
        {loggedIn.status ? (
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        ) : (
          <LoginScreen />
        )}
      </div>
    );
  }
}

api.getData();

const mapStateToProps = state => ({ loggedIn: state.loggedIn });

export default withRouter(connect(mapStateToProps)(App));
