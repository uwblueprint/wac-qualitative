import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';

import sections from '../survey_data.json';

class QuestionnaireSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: {},
		};
	}

	selectAnswer(id, title, score) {
		this.setState(state => ({
			answers: {
				...state.answers,
				[id]: {
					title,
					score,
				},
			},
		}));
	}

	submitAnswers() {
		const answers = Object.values(this.state.answers);
		this.props.updateAnswers(answers, this.props.pageNum);
	}

	render() {
		const section = sections[this.props.pageNum];
		return (
			<div>
				<h1>Section {this.props.pageNum}</h1>
				{section.questions.map(el => {
					return (
						<QuestionCard
							key={el.question.id}
							handleClick={this.selectAnswer.bind(this)}
							answer={this.state.answers[el.question.id]}
							question={el.question}
							options={el.options}
						/>
					);
				})}
				<button onClick={this.props.decrementPageNum}>prev</button>
				<button onClick={this.props.incrementPageNum}>next</button>
			</div>
		);
	}
}

export default QuestionnaireSection;

QuestionnaireSection.propTypes = {
	pageNum: PropTypes.number,
	incrementPageNum: PropTypes.func,
	decrementPageNum: PropTypes.func,
	updateAnswers: PropTypes.func,
};
