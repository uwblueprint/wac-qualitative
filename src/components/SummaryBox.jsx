import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

import "../styles/_summary.css";

class SummaryBox extends Component {
 
  render() {
    const sectionTitle = this.props.sectionTitle;
    const sectionNumber = this.props.sectionNumber;
    const val = this.props.val;

    // YES
    if (val == 0) {
      return (
        <div className="figmaCard">
          <div className="boxboxbox">
            <h1 className="sectionNum"> Section {sectionNumber} </h1>
            <h1 className="sectionTitle"> {sectionTitle} </h1>
          </div>
          <div id="bar" />
          <div className="outer-circle red-b" id="left-circle">
            <div className="inner-circle">
              <p className="circle-text red-c" id="circle-left-text">
                Biased
              </p>
            </div>
          </div>
          <div className="outer-circle">
            <div className="inner-circle">
              <p className="circle-text" id="circle-center-text">
                Somewhat Biased
              </p>
            </div>
          </div>
          <div className="outer-circle">
            <div className="inner-circle">
              <p className="circle-text" id="circle-right-text">
                Not Biased
              </p>
            </div>
          </div>
          <div id="rectangle" className="red-b" />
        </div>
      );
    } else if (val == 1) {
      // MAYBE
      return (
      <div className="figmaCard">
        <div className="boxboxbox">
          <h1 className="sectionNum"> Section {sectionNumber} </h1>
          <h1 className="sectionTitle"> {sectionTitle} </h1>
        </div>
        <div id="bar"></div>
        <div className="outer-circle" id="left-circle">
          <div className="inner-circle">
            <p className="circle-text" id="circle-left-text">Biased</p>
          </div>
        </div>
        <div className="outer-circle yellow-b">
          <div className="inner-circle">
            <p className="circle-text yellow-c" id="circle-center-text">Somewhat Biased</p>
          </div>
        </div>
        <div className="outer-circle">
          <div className="inner-circle">
            <p className="circle-text" id="circle-right-text">Not Biased</p>
          </div>
        </div>
        <div id="rectangle" className="yellow-b"></div>
      </div>
    );
    } else {
      // NO
      return (
      <div className="figmaCard">
        <div className="boxboxbox">
          <h1 className="sectionNum"> Section {sectionNumber} </h1>
          <h1 className="sectionTitle"> {sectionTitle} </h1>
        </div>
        <div id="bar"></div>
        <div className="outer-circle" id="left-circle">
          <div className="inner-circle">
            <p className="circle-text" id="circle-left-text">Biased</p>
          </div>
        </div>
        <div className="outer-circle">
          <div className="inner-circle">
            <p className="circle-text" id="circle-center-text">Somewhat Biased</p>
          </div>
        </div>
        <div className="outer-circle green-b">
          <div className="inner-circle">
            <p className="circle-text green-c" id="circle-right-text">Not Biased</p>
          </div>
        </div>
        <div id="rectangle" className="green-b"></div>
      </div>
    );
    }
  }
}

export default SummaryBox;