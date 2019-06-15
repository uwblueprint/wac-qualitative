import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

	handleNext() {
    this.props.updateAnswers(this.state.answers);

		if (this.props.pageNum < sections.length - 1) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			this.props.incrementPageNum();
		}
	}

	render() {
		const section = sections[this.props.pageNum];
		return (
			<div>
				<h1>Section {this.props.pageNum + 1}</h1>
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
				{this.props.pageNum > 0 && <button onClick={this.props.decrementPageNum}>prev</button>}
				<button onClick={this.handleNext.bind(this)}>
					{this.props.pageNum < sections.length - 1 ? (
						'next'
					) : (
						<Link to={{ pathname: `/summary` }}>finish</Link>
					)}
				</button>
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
