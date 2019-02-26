import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";
import './App.css';

import Header from './components/header.js';
import DigitalClock from './components/digitalClock.js';
import Stopwatch from './components/stopwatch.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="content">
          <Header />
          <div className="comps">
            <SwipeableRoutes className="h100">
                <Route exact path="/" component={DigitalClock} />
                <Route path="/stopwatch" component={Stopwatch} />
            </SwipeableRoutes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
