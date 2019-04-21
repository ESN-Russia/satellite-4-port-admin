import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Container, Segment, Header, Image } from "semantic-ui-react";

const About = ({ data }) => (
  <Segment vertical padded="very">
    <Container text>
      <Header as="h1">About</Header>
      {_.map(
        data,
        element => (element.type === "text" ? <p>{element.value}</p> : <Image src={element.src} />),
      )}
    </Container>
  </Segment>
);

const mapStateToProps = ({ about }) => ({
  data: about,
});

export default connect(mapStateToProps)(About);
