import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './container'; 
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2 className="what">WHAT?</h2>
        <h2 className="newGame">+ NEW GAME</h2>
        <h1 className="title">HOT or COLD</h1>
        <Container />
      </div>
    );
  }
}

export default App;
