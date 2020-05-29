import React, { Fragment } from "react";
import Button from "../styled/Button";
import Card from "../styled/Card";
import ModalPopup from "./ModalPopup";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section1: { items: [], counter: 0 },
      section2: { items: [], counter: 0 },
      section3: { items: [], counter: 0 },
      section4: { items: [], counter: 0 },
      showModalPopup: false,
      btnId: 0,
    };
  }

  handleClose = () => {
    this.setState({ showModalPopup: false });
  };

  handleShow = () => {
    this.setState({ showModalPopup: true });
  };

  handleCardKeyPress = (event) => {
    let code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      event.currentTarget.disabled = true;
    }
  };

  renderCards = (id) => {
    let { section1, section2, section3, section4 } = this.state;
    let section =
      id === 1
        ? section1
        : id === 2
        ? section2
        : id === 3
        ? section3
        : section4;
    for (var i = 0; i < section.counter; i++) {
      section.counter !== section.items.length &&
        section.items.push(
          <Card
            className="col-sm-2"
            onKeyPress={this.handleCardKeyPress}
            autoFocus
            id={id}
          ></Card>
        );
    }
    return <div>{section.items}</div>;
  };

  handleBtnClick = (event) => {
    this.setState({ showModalPopup: true, btnId: event.target.id });
  };

  ModalCallback = () => {
    let { btnId } = this.state;
    let id = btnId;
    this.setState({
      [`section${id}.counter`]: this.state[`section${id}`].counter++,
      showModalPopup: false,
    });
  };

  render() {
    let { showModalPopup } = this.state;
    return (
      <Fragment>
        {showModalPopup && (
          <ModalPopup
            handleClose={this.handleClose}
            ModalCallback={() => this.ModalCallback()}
            show={showModalPopup}
          />
        )}
        <div>
          <span style={{ fontFamily: "cursive" }}>{this.props.actionName}</span>
          <Button onClick={this.handleBtnClick} id={this.props.actionId}>
            +
          </Button>
        </div>
        {this.renderCards(this.props.actionId)}
      </Fragment>
    );
  }
}

export default Section;
