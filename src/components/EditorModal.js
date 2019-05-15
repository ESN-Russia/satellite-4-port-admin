import React, { Component } from "react";
import { connect } from "react-redux";

import { Modal, Button } from "semantic-ui-react";
import SimpleMDE from "react-simplemde-editor";

class EditorModal extends Component {
  state = {};

  close() {
    window.store.dispatch({
      type: "CLOSE_MODAL",
    });
  }

  render() {
    const {
      modalState: { isOpen, pageName, pageUrl },
      page,
    } = this.props;
    return (
      <Modal open={isOpen} dimmer="blurring">
        <Modal.Header>
          "{pageName}" at {pageUrl}
        </Modal.Header>
        <Modal.Content>
          <SimpleMDE value={page} />
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={() => this.close()}>
            Cancel
          </Button>
          <Button icon="save" content="Save" color="green" />
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ modalState, data }) => ({
  modalState,
  page: data.pages[modalState.pageUrl],
});

export default connect(mapStateToProps)(EditorModal);
