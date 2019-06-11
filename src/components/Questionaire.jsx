import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as count from "../actions/countActions";
import Header from "./Header";

// TODO: Replace this with the actual questionaire component
class Questionaire extends Component {
  render() {
    return (
      <div>
        <Header pageNum={this.props.pageNum} />
        {/* Call the export function with test data on click as proof of concept*/}
        <Link>
          <span onClick={() => count.exportCsv([{"question":"q1","answer":"a1"}])}>
            EXPORT CSV
          </span>
        </Link>
        <h1>
            Question {this.props.pageNum.toString()}
        </h1>
        <Link
          to={{
            pathname: `/questionaire/${(this.props.pageNum + 1).toString()}`
          }}
        >
          Questionaire Page {(this.props.pageNum + 1).toString()}
        </Link>
      </div>
    );
  }
}

export default Questionaire;
