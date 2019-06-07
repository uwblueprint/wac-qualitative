import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import QuestionCard from "./QuestionCard";

var survey = require("../survey_data.json")

// TODO: Replace this with the actual questionaire component
class Questionaire extends Component {
  render() {
    const surveyPage = survey[this.props.pageNum-1];
    return (
      <div>
        <Header pageNum={this.props.pageNum} />
          {surveyPage.questions.map((el) => {
            return (
              <QuestionCard question={el.question} options={el.options}>
              </QuestionCard>
            )
          })}
      </div>
    );
  }
}

export default Questionaire;
