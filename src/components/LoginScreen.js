import React, { Component } from "react";
import { connect } from "react-redux";
import nanoid from "nanoid";
import { Button, Loader } from "semantic-ui-react";
import Cookies from "js-cookie";

import api from "../api";

const styles = {
  height: "100vh",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

class LoginScreen extends Component {
  state = {};

  render() {
    const { loggedIn } = this.props;

    if (!Cookies.get("esn_auth_token")) {
      Cookies.set("esn_auth_token", nanoid(32));
    }

    if (!loggedIn.loading) {
      return (
        <div style={styles}>
          <div>
            <Button size="massive" primary onClick={() => api.loginRedirect()}>
              Login via Galaxy
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div style={styles}>
        <div>
          <Loader active inline size="massive" />
          <h1>Logging in...</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(LoginScreen);
