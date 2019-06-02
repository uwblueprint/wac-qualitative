import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

import "../styles/_summary.css";

class SummaryPage extends Component {
  render() {
    return (
      <div>
        <Header summary={true} />
        <div className="figmaCard">
          <h1 className="sectionNum"> 123 </h1>
          <h1 className="sectionTitle"> Hello world yes </h1>
        </div>
      </div>      
    );
  }
}

export default SummaryPage;