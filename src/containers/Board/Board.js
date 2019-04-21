import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Container, Segment, Header, Card } from "semantic-ui-react";

import BoardMember from "./BoardMember";

const Board = ({ members }) => (
  <Segment vertical>
    <Container>
      <Header as="h1">National board 17-18</Header>

      <Card.Group centered>{_.map(members, member => <BoardMember member={member} />)}</Card.Group>
    </Container>
  </Segment>
);

const mapStateToProps = ({ boards }) => ({ members: boards["17-18"] });

export default connect(mapStateToProps)(Board);
