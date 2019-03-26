import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

<<<<<<< HEAD
import Intro from "./components/Intro.jsx";
import Questionaire from "./components/Questionaire.jsx";
=======
import Questionaire from './components/Questionaire.jsx';
import TitlePage from './TitlePage';
>>>>>>> first try titlepage

class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Route exact path={`/`} component={Intro} />
        <Route
          exact
          path={`/questionaire/:pageNum`}
          render={({match: {params: { pageNum }}}) => 
            <Questionaire pageNum={parseInt(pageNum)} />}
        />
=======
        <Route exact path={`/`} component={TitlePage} />
        <Route exact path={`/questionaire/:pageNum`} render={({ match: { params: { pageNum } } }) =>
          <Questionaire pageNum={parseInt(pageNum)} />} />
>>>>>>> first try titlepage
      </Router>
    );
  }
}

export default App;
