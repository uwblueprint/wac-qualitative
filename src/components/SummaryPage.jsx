import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Header from "./Header";
import SummaryBox from "./SummaryBox";

import "../styles/_summary.css";

const questions = [
  { id: 1, title: "question 1", val: 0 },
  { id: 2, title: "question 2", val: 1 },
  { id: 3, title: "lmao 3", val: 2 },
  { id: 4, title: "lmao 4", val: 1 },
  { id: 5, title: "lmao 5", val: 0 }
];

const box = questions.map((question) =>
  <SummaryBox sectionNumber={question.id} sectionTitle={question.title} val={question.val}/>
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