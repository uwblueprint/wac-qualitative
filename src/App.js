import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={{ pathname: `/questionaire/1` }}>Questionaire</Link>
        </div>
        <Route exact path={`/questionaire/:pageNum`} component={Questionaire} />
      </Router>
    );
  }
}

// TODO: Replace this with the actual questionaire component
const Questionaire = ({ match }) => {
  const pageNum = parseInt(match.params.pageNum)
  return (
    <div>
      <h1>Question {parseInt(pageNum)}</h1>
      <div>
        <Link to={{ pathname: `/questionaire/${(pageNum + 1).toString()}` }}>Questionaire Page {(pageNum + 1).toString()}</Link>
      </div>
    </div >
  )
}

export default App;
