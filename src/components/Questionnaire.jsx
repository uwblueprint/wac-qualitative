import React, { Component } from 'react';
import * as index from '../actions/index'

import QuestionnaireHeaderContainer from '../containers/QuestionnaireHeaderContainer';
import QuestionCard from "./QuestionCard";
import Footer from './Footer';

var survey = require("../survey_data.json")

class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: {}
		}
	}

	selectAnswer(id, title, score) {
		this.setState(state => ({
			answers: {
				...state.answers,
				[id]: {
					title,
					score,
				}
			}
		}))
	}

	render() {
    	const surveyPage = survey[1];
		return (
			<div>
				<div>
					<QuestionnaireHeaderContainer />
					{/* Call the export function with test data on click as proof of concept*/}
					<span onClick={() => index.exportCsv([{"question":"q1","answer":"a1"}])}>
						EXPORT CSV
					</span>
					<h1>Section {this.props.pageNum}</h1>
					{surveyPage.questions.map((el) => {
						return (
							<QuestionCard key={el.question.id}
								handleClick={(this.selectAnswer.bind(this))}
								answer={this.state.answers[el.question.id]}
								question={el.question} options={el.options}>
							</QuestionCard>
						)
					})}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Questionnaire;
