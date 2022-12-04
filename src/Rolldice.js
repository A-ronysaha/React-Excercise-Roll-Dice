import React, { Component } from "react";
import Ludo from "./Dice";
import "./Rolldice.css";

class Roll extends Component {
  static defaultProps = {
    side: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one",
      isRolling : false
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // set face of two dice
    let newDice1 =
      this.props.side[Math.floor(Math.random() * this.props.side.length)];
    let newDice2 =
      this.props.side[Math.floor(Math.random() * this.props.side.length)];

    //set new state to dice
    this.setState({
      dice1: newDice1,
      dice2: newDice2,
      isRolling : true
    });

    // set isRolling again false after some second

    setTimeout(()=>{
      this.setState  ({isRolling : false})
    },1000)
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Ludo face={this.state.dice1} rolling = {this.state.isRolling}/>
          <Ludo face={this.state.dice2} rolling = {this.state.isRolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default Roll;

//FATHER
