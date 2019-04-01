import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

// TODO: Replace this with the actual questionaire component
class Questionaire extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Question {this.props.pageNum.toString()}</h1>
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
