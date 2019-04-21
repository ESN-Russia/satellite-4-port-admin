import React, { Component } from "react";
import { Card, Image, Segment, Form } from "semantic-ui-react";

import _ from "lodash";

class BoardMember extends Component {
  state = {
    name: "",
    section: "",
    position: "",
    loves: "",
    hates: "",
    speaks: "",
  };

  constructor(nextProps) {
    super(nextProps);
    this.state = { ...nextProps.member };
  }

  GetDerivedStateFromProps(nextProps) {
    return { ...nextProps.member };
  }

  hasChanges = () => !_.isEqual(this.props.member, this.state);

  render() {
    const { member } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Input label="Name" value={member.name} />
          <Form.Input label="Section" value={member.section} />
          <Form.Input label="Position" value={member.position} />
          <Form.Input label="Loves" value={member.loves} />
          <Form.Input label="Hates" value={member.hates} />
          <Form.Input label="Speaks" value={member.speaks} />
        </Form>
      </Segment>
    );
  }
}

export default BoardMember;
