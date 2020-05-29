import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to add the card?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={this.props.ModalCallback}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalPopup;
