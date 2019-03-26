import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterContainer from './containers/CounterContainer';
const Questions = ({ answer, className }) => <div className={className}>{answer}</div>;
class App extends Component {
  render() {
    const arr = ['Yes', 'No', 'Maybeso'];
    return (
      <div className="App">
        <CounterContainer />
        {arr.map(response => (
          <Questions className="Purple" answer={response} />
        ))}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
