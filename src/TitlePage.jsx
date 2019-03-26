import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from "./App.css";

class TitlePage extends Component {
  render() {
    return (
      <div className="card">
      <p>hello world</p>
      </div>
    );
  }
}

export default withStyles(styles)(TitlePage);
