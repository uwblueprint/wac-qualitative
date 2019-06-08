import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

import "../styles/_summary.css";

class SummaryBox extends Component {
 
  render() {
    const sectionTitle = this.props.sectionTitle;
    const sectionNumber = this.props.sectionNumber;
    const val = this.props.val;

    return (
      <div className="figmaCard">
        <div className="boxboxbox">
          <h1 className="sectionNum"> Section {sectionNumber} </h1>
          <h1 className="sectionTitle"> {sectionTitle} </h1>
        </div>
        <div id="bar" />
        <div className={`outer-circle ${val == 0 ? "red-b" : ""}`} id="left-circle">
          <div className="inner-circle">
            <p className={`circle-text ${val == 0 ? "red-c" : ""}`} id='circle-left-text'>
              Biased
            </p>
          </div>
        </div>
        <div className={`outer-circle ${val == 1 ? "yellow-b" : ""}`} id='left-circle'>
          <div className="inner-circle">
            <p className={`circle-text ${val == 1 ? "yellow-c" : ""}`} id='circle-center-text'>
              Somewhat Biased
            </p>
          </div>
        </div>
        <div className={`outer-circle ${val == 2 ? "green-b" : ""}`} id='left-circle'>
          <div className="inner-circle">
            <p className={`circle-text ${val == 2 ? "green-c" : ""}`} id="circle-right-text">
              Not Biased
            </p>
          </div>
        </div>
        <div id="rectangle" className={`${val == 0 ? 'red-b' : `${val == 1 ? 'yellow-b' : 'green-b'}`}`} />
      </div>
    );

  }
}

export default SummaryBox;