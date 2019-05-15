import React, { Component } from "react";
import { connect } from "react-redux";

import _ from "lodash";
import { Segment, Header, List } from "semantic-ui-react";

class MenuSettings extends Component {
  state = { loading: false };

  render() {
    const { menuItems } = this.props;
    const { loading } = this.state;
    return (
      <Segment loading={loading}>
        <Header size="large">Menu settings</Header>

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
              key={`keykey_${item.url}`}
            />
          ))}
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = ({ data }) => ({ menuItems: data.menu_items });

export default connect(mapStateToProps)(MenuSettings);
