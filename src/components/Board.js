import React, { Fragment } from "react";
import Section from "./Section";
import "../styles/Board.css";

const actions = [
  { text: "What went well", id: 1 },
  { text: "What can be improved", id: 2 },
  { text: "Start doing", id: 3 },
  { text: "Action items", id: 4 },
];

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems = (action) => {
    return (
      <div className="col-sm-6">
        <Section actionName={action.text} actionId={action.id} />
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row main_component">
          {actions.map((action, index) => {
            return this.renderItems(action);
          })}
        </div>
      </div>
    );
  }
}

export default Board;
