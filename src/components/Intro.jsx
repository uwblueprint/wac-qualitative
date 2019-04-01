import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// TODO: Replace this with the actual intro page
class Intro extends Component {
    render() {
        return (
            <div>
                <h1>Introduction!</h1>
                <Link to={{ pathname: `/questionaire/1` }}>Questionaire 1</Link>
            </div>
        );
    }
}

export default Intro;
