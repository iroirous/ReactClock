import React, { Component } from 'react';
import './App.css';

import DigitalClock from './components/digitalClock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Clock</h1>
        </header>
        <div className="Content">
          <DigitalClock />
        </div>
      </div>
    );
  }
}

export default App;
