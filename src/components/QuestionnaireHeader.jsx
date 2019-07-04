import React from "react";
import PropTypes from "prop-types";
import ProgressIndicator from "./ProgressIndicator";
import sections from "../survey_data.json";

import logo from "../images/logo.png";
import "../styles/header.css";

const QuestionnaireHeader = ({ pageNum }) => (
  <div className="header-container">
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
    <h2 className="text header">Dataset Bias Assessment Tool</h2>
    <p className="text subheader">
      Section {pageNum + 1}/{sections.length}
    </p>
    <h1 className="text title">{sections[pageNum].section}</h1>
    <div className="indicator-container">
      <ProgressIndicator pageNum={pageNum} sections={sections} />
    </div>
  </div>
);

export default QuestionnaireHeader;

QuestionnaireHeader.propTypes = {
  pageNum: PropTypes.number
};
