import React, { Component } from "react";
import * as index from "../actions/index";

import Footer from "./Footer";
import QuestionnaireHeaderContainer from "../containers/QuestionnaireHeaderContainer";
import QuestionnaireSectionContainer from "../containers/QuestionnaireSectionContainer";

class Questionnaire extends Component {
  render() {
    return (
      <div>
        <QuestionnaireHeaderContainer />
        <QuestionnaireSectionContainer />
        <Footer />
      </div>
    );
  }
}

export default Questionnaire;
