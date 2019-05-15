import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Form, Image } from "semantic-ui-react";
import api from "../api";

class GeneralSettings extends Component {
  constructor(nextProps) {
    super(nextProps);

    const { settings } = nextProps;
    this.state = {
      currentMaintenance: settings.maintenance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    };
  }

  GetDerivedStateFromProps({ settings }, oldState) {
    return {
      currentMaintenance: settings.maintenance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    };
  }

  haveChanges = () => {
    const {
      props: { settings },
      state: currentSettings,
    } = this;

    return (
      settings.maintenance !== currentSettings.currentMaintenance ||
      settings.name !== currentSettings.currentName ||
      settings.logo_url !== currentSettings.currentLogoUrl
    );
  };

  resetChanges = () => {
    const { settings } = this.props;
    this.setState({
      currentMaintenance: settings.maintenance,
      currentName: settings.name,
      currentLogoUrl: settings.logo_url,
    });
  };

  saveChanges = async () => {
    const { currentMaintenance, currentName, currentLogoUrl } = this.state;
    await api.updateData({
      settings: {
        maintenance: currentMaintenance,
        name: currentName,
        logo_url: currentLogoUrl,
      },
    });
  };

  render() {
    const { currentName, currentMaintenance, currentLogoUrl } = this.state;
    const haveChanges = this.haveChanges();

    return (
      <Segment padded style={{ marginTop: 10 }}>
        <Header size="large">General settings</Header>
        <Form>
          <Form.Checkbox
            checked={currentMaintenance}
            onChange={(e, { checked }) => this.setState({ currentMaintenance: checked })}
            label="Is under maintenance"
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
            <Form.Button color="green" disabled={!haveChanges} onClick={() => this.saveChanges()}>
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

const mapStateToProps = ({ data }) => data;

export default connect(mapStateToProps)(GeneralSettings);
