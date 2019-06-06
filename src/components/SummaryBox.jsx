import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

import "../styles/_summary.css";

class SummaryBox extends Component {
 
  render() {
    const sectionTitle = this.props.sectionTitle;
    const sectionNumber = this.props.sectionNumber;

    return (
      <div className="figmaCard">
        <div className="boxboxbox">
          <h1 className="sectionNum"> Section {sectionNumber} </h1>
          <h1 className="sectionTitle"> {sectionTitle} </h1>
        </div>
      </div>
    );
  }
}

export default SummaryBox;