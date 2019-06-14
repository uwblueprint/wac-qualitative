import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Questionnaire from "./components/Questionnaire.jsx";
import TitlePageContainer from "./containers/TitlePageContainer";
import SummaryPageContainer from "./containers/SummaryPageContainer";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={`/`} component={TitlePageContainer} />
        <Route exact path={`/questionnaire`} component={Questionnaire} />
        <Route exact path={'/summary'} component={SummaryPageContainer}/>
      </Router>
    );
  }
}

export default App;
