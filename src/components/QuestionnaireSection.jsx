import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';

import sections from '../survey_data.json';
import '../styles/QuestionnaireSection.css';
import '../styles/_buttons.css';

class QuestionnaireSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: {}
		};

		this.selectAnswer = this.selectAnswer.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		window.addEventListener("keydown", this.handleSelect);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleSelect);
	}

	getQuestionCard(id) {
		return document.getElementById('question-' + id);
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
		this.getQuestionCard(id).classList.remove('error');
	}

	handleSelect(e) {
		if (e.keyCode != 32) {
			return;
		}
		
		if (!Array.from(document.activeElement.classList).includes("answer")) {
			return;
		}

		e.preventDefault();
		document.activeElement.click();
	}

	handlePrev() {
		if (this.props.pageNum > 0) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			this.props.decrementPageNum();
		}
	}

	handleNext() {
		const { questions } = sections[this.props.pageNum];
		const unansweredQuestions = questions.filter(
			({ question }) => !this.state.answers[question.id],
		);

		if (unansweredQuestions.length) {
      const unansweredQuestionEls = unansweredQuestions.map(({ question }) => this.getQuestionCard(question.id))
			unansweredQuestionEls.forEach(el => el.classList.add('error'));
			unansweredQuestionEls[0].scrollIntoView({ behavior: 'smooth' });
			return;
		}

		this.props.updateAnswers(this.state.answers);

		if (this.props.pageNum < sections.length - 1) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			this.props.incrementPageNum();
		}
	}

	render() {
		const section = sections[this.props.pageNum];
		return (
			<div className="questionSection">
				<div className="questionContainer">
					{section.questions.map(({ question, options }) => (
						<QuestionCard
							id={question.id}
							key={question.id}
							handleClick={this.selectAnswer}
							answer={this.state.answers[question.id]}
							question={question}
							options={options}
						/>
					))}
				</div>
				<div className="buttonContainer">
					<button className="secondary" onClick={this.handlePrev}>
						{this.props.pageNum > 0 ? 'prev' : <Link to={{ pathname: '/' }}>previous</Link>}
					</button>
					<button className="primary" onClick={this.handleNext}>
						{this.props.pageNum < sections.length - 1 ? (
							'next'
						) : (
							<Link to={{ pathname: `/summary` }}>submit</Link>
						)}
					</button>
				</div>
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
