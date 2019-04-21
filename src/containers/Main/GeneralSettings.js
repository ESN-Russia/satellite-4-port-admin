import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Form, Image } from "semantic-ui-react";

class GeneralSettings extends Component {
  constructor(nextProps) {
    super(nextProps);

    const { settings } = nextProps;
    this.state = {
      currentMaintainance: settings.maintainance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    };
  }

  GetDerivedStateFromProps({ settings }, oldState) {
    return {
      currentMaintainance: settings.maintainance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    };
  }

  haveChanges() {
    const {
      props: { settings },
      state: currentSettings,
    } = this;

    return (
      settings.maintainance !== currentSettings.currentMaintainance ||
      settings.name !== currentSettings.currentName ||
      settings.logo_url !== currentSettings.currentLogoUrl
    );
  }

  resetChanges() {
    const { settings } = this.props;
    this.setState({
      currentMaintainance: settings.maintainance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    });
  }

  render() {
    const { currentName, currentMaintainance, currentLogoUrl } = this.state;
    const haveChanges = this.haveChanges();

    return (
      <Segment padded style={{ marginTop: 10 }}>
        <Header size="h1">General settings</Header>
        <Form>
          <Form.Checkbox
            checked={currentMaintainance}
            onChange={(e, { checked }) => this.setState({ currentMaintainance: checked })}
            label="Is under maintainance"
          />
          <Form.Input
            label="Section name"
            value={currentName}
            onChange={(e, { value }) => this.setState({ currentName: value })}
          />
          <Form.Group>
            <Form.Input
              label="Logo URL"
              value={currentLogoUrl}
              onChange={(e, { value }) => this.setState({ currentLogoUrl: value })}
            />
            <Image src={currentLogoUrl} avatar />
          </Form.Group>
          <Form.Group inline>
            <Form.Button color="green" disabled={!haveChanges}>
              Save
            </Form.Button>
            <Form.Button disabled={!haveChanges} onClick={() => this.resetChanges()}>
              Cancel
            </Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(mapStateToProps)(GeneralSettings);
