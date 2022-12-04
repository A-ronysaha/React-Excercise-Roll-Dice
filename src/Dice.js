import React, { Component } from "react";
import "./Dice.css";
class Ludo extends Component {
  render() {
    return (
      <i
        className={`dice fas fa-dice-${this.props.face}${
          this.props.isRolling ? "shaking" : ""
        }`}
      />
    );
  }
}

export default Ludo;

//  SON
