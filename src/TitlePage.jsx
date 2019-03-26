import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitlePage extends Component {

  render() {
    var cardStyle ={
      color: "white",
      background: "#FFFFFF",
  /* CARD STROKE STYLE */
  border: "1px solid #E1E1E1",
  boxSizing: "border-box",/* Card drop shadow */
  boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.07)",
  borderRadius: '2px'
    }; 
    return (
      <div style={cardStyle}>
      <p>hello world</p>
      </div>
    );
  }
}

export default TitlePage;
