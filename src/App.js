import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.jsx";

import CounterContainer from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <Header />
        {/* TODO: remove */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Stephen's the best <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
