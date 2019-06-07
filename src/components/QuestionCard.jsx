import React, { Component } from "react";
import "../styles/QuestionCard.css"

const letterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

class QuestionCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="questionNumber">Question {this.props.question.id}</div>
          <div className="title">{this.props.question.title}</div>
          {this.props.options.map((opt, index) => {
            return (
              <div className="column">
                <div className="answer">
                  <div className="letterOption">
                    <div className="letter">
                      {letterOptions[index]}
                    </div>
                  </div>
                  <div className="answerText">
                    {opt.title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      );
    }
  }
  
  export default QuestionCard;