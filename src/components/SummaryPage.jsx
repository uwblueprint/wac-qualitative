import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Header from "./Header";
import SummaryBox from "./SummaryBox";

import "../styles/_summary.css";

const questions = [
  { id: 1, title: "question 1"},
  { id: 2, title: "question 2"},
  { id: 3, title: "lmao 3"},
  { id: 4, title: "lmao 4" },

];

const box = questions.map((question) =>
  <SummaryBox sectionNumber={question.id} sectionTitle={question.title} />
);

class SummaryPage extends Component {
  render() {
    return (
      <div>
        <Header summary={true} />
        <div className="box-container">
          {box}
        </div>
      </div>      
    );
  }
}

export default SummaryPage;