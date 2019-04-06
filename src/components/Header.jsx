import React, { Component } from "react";
import logo from "../logo.png";
import "../styles/header.css";
import PageIndicatorContainer from "../containers/PageIndicatorContainer";

class Header extends Component {
  render() {
    var currentPage = "1";
    var totalPages = "8";
    return (
      <div className="header-container">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <h2 className="text header">Dataset Bias Assessment Tool</h2>
        <p className="text subheader">
          Section {currentPage}/{totalPages}
        </p>
        <h1 className="text title">Progress Title</h1>
        <div className="indicator-container">
          <PageIndicatorContainer />
        </div>
      </div>
    );
  }
}
export default Header;
