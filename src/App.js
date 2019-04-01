import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Intro from './components/Intro.jsx';
import Questionaire from './components/Questionaire.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={`/`} component={Intro} />
        <Route exact path={`/questionaire/:pageNum`} render={({ match }) =>
          <Questionaire pageNum={parseInt(match.params.pageNum)} />} />
      </Router>
    );
  }
}

export default App;
