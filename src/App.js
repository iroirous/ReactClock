import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import DigitalClock from './components/digitalClock.js';
import Stopwatch from './components/stopwatch.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Route exact path="/" component={DigitalClock} />
          <Route path="/stopwatch" component={Stopwatch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
