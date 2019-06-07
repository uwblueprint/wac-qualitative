import React, { Component } from "react";
import "../styles/QuestionCard.css"

const letterOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const sampleQuestion = {
  id: 1,
  title: "Was the person asking the questions a professionally trained enumerator?",
}

const options = [{
    title: "Yes, professionally trained enumerator",
    score: 1
  }, {
    title: "No, not professionally trained enumerator",
    score: 3
  }, {
    title: "Unsure",
    score: 99
}]


class QuestionCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="questionNumber">Question 3</div>
          <div className="title">Sample Question</div>
          {options.map((opt, index) => {
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