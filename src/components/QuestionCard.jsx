import React, { Component } from "react";
import "../styles/QuestionCard.css"

const letterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

class QuestionCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="questionNumber">Question {this.props.question.id}</div>
        <div className="title">{this.props.question.title}</div>
        <div className="grid-container">
        {this.props.options.map((opt, index) => {
          if (this.props.answer && this.props.answer.title === opt.title) {
            return (
                <div className="selectedAnswer" key={opt.title}>
                  <div className="selectedLetterOption">
                    <div className="letter">
                      {letterOptions[index]}
                    </div>
                  </div>
                  <div className="answerText">
                    {opt.title}
                  </div>
                </div>
            )
          }
          return (
              <div 
                className="answer"  
                key={opt.title} 
                onClick={() => this.props.handleClick(this.props.question.id, opt.title, opt.score)}
              >
                <div className="letterOption">
                  <div className="letter">
                    {letterOptions[index]}
                  </div>
                </div>
                <div className="answerText">
                  {opt.title}
                </div>
              </div>
          )
        })}
        </div>
      </div>
    );
  }
}
  
  export default QuestionCard;