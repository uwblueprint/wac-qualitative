import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';


import Questionnaire from "./components/Questionnaire.jsx";
import TitlePageContainer from "./containers/TitlePageContainer";
import SummaryPageContainer from "./containers/SummaryPageContainer";

function initializeReactGA() {
  ReactGA.initialize('UA-142479675-1');
  ReactGA.pageview('/');
}

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
