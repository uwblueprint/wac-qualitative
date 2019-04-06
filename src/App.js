import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Intro from './components/Intro.jsx';
import Questionaire from './components/Questionaire.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={`/`} component={Intro} />
        <Route exact path={`/questionaire/:pageNum`} render={({ match: { params: { pageNum } } }) =>
          <Questionaire pageNum={parseInt(pageNum)} />} />
      </Router>
    );
  }
}

export default App;
