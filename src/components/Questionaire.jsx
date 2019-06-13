import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import QuestionCard from "./QuestionCard";

var survey = require("../survey_data.json")



class Questionaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    }
  }

  selectAnswer(id, title, score) {
    this.setState(state => ({
      answers: {
        ...state.answers,
        [id]: {
          title,
          score,
        }
      }
    }))
  }

  render() {
    const surveyPage = survey[this.props.pageNum-1];
    return (
      <div>
        <Header pageNum={this.props.pageNum} />
          {surveyPage.questions.map((el) => {
            return (
              <QuestionCard key={el.question.id}
                handleClick={(this.selectAnswer.bind(this))}
                answer={this.state.answers[el.question.id]}
                question={el.question} options={el.options}>
              </QuestionCard>
            )
          })}
      </div>
    );
  }
}

export default Questionaire;
