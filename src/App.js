import logo from './logo.svg';
import Ludo from './Dice'
import Roll from './Rolldice'
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Roll/>
    </div>
  );
}
}

export default App;

// Grand father
