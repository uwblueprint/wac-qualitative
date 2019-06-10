import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Questionnaire from "./components/Questionnaire.jsx";
import TitlePage from "./components/TitlePage";

import SummaryPage from "./components/SummaryPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={`/`} component={TitlePage} />
        <Route exact path={`/questionnaire`} component={Questionnaire} />
        <Route exact path={'/summary'} component={SummaryPage}/>
      </Router>
    );
  }
}

export default App;
