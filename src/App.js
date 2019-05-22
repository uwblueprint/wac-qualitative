import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Questionaire from "./components/Questionaire.jsx";
import TitlePage from "./components/TitlePage";
import OptionButton from "./OptionButton.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={`/`} component={TitlePage} />
        <Route
          exact
          path={`/questionaire/:pageNum`}
          render={({
            match: {
              params: { pageNum }
            }
          }) => <Questionaire pageNum={parseInt(pageNum)} />}
        />
      </Router>
    );
  }
}

export default App;
