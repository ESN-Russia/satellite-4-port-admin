import React, { Component } from "react";
import { connect } from "react-redux";

import _ from "lodash";
import { Segment, Header, List, Modal, Icon, Button } from "semantic-ui-react";

class MenuSettings extends Component {
  state = { loading: false, modalIsOpen: false };

  render() {
    const { menuItems } = this.props;
    const { loading, modalIsOpen } = this.state;
    return (
      <Segment loading={loading}>
        <Header size="h1">Menu settings</Header>

        <List divided>
          {_.map(menuItems, item => (
            <List.Item
              onClick={() =>
                window.store.dispatch({
                  type: "OPEN_MODAL",
                  pageName: item.title,
                  pageUrl: item.url,
                })
              }
              header={item.title}
              description={item.url}
            />
          ))}
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = ({ menuItems }) => ({ menuItems });

export default connect(mapStateToProps)(MenuSettings);
