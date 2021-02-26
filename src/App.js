import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const configs = {
      a: '1',
      b: '2',
      d: '4',
      c: '3',
      f: '6',
      e: '5',
      g: '7',
      h: '7'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Version 2</h1>
        </header>
      </div>
    );
  }
}

export default App;
