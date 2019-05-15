/* eslint-disable */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./components/Main";
import api from "./api";

class App extends Component {
  state = {}; // FIXME

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

api.getData();

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
