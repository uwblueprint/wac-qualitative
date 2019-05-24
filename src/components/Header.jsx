import React, { Component } from "react";
import logo from '../../public/images/logo.png';

import "../styles/header.css";
import PageIndicatorContainer from "../containers/PageIndicatorContainer";

class Header extends Component {
  render() {
    const currentPage = this.props.pageNum;
    const totalPages = "8";
    return (
      <div className="header-container">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <h2 className="text header">Dataset Bias Assessment Tool</h2>
        <p className="text subheader">
          Section {currentPage}/{totalPages}
        </p>
        <h1 className="text title">Progress Title</h1>
        <div className="indicator-container">
          <PageIndicatorContainer pageNum={currentPage} />
        </div>
      </div>
    );
  }
}
export default Header;
