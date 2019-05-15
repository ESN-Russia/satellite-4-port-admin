import React from "react";
import { connect } from "react-redux";

import { Container, Header } from "semantic-ui-react";
import GeneralSettings from "./GeneralSettings";
import MenuSettings from "./MenuSettings";
import EditorModal from "./EditorModal";

const Main = ({ settings, menuItems }) => (
  <Container>
    <Header style={{ fontSize: "3em", margin: "1.2em 0" }}>
      {settings.name} Admin Page - [{window.location.origin}]
    </Header>

    <GeneralSettings />
    <MenuSettings />

    <EditorModal />
  </Container>
);

const mapStateToProps = ({ data }) => data;

export default connect(mapStateToProps)(Main);
