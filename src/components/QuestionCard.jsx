import React from 'react';
import PropTypes from 'prop-types';

import '../styles/QuestionCard.css';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const QuestionCard = ({ id, question, answer, options, handleClick }) => (
	<div className="card" id={id}>
    <div className="errorMessage">Please answer this question.</div>
		<div className="questionNumber">Question {question.id}</div>
		<div className="title">{question.title}</div>
		<div className="grid-container">
			{options.map((opt, i) => {
				const letter = ALPHABET.charAt(i).toUpperCase();
				if (answer && answer.title === opt.title) {
					return (
						<div className="selectedAnswer" key={i}>
							<div className="selectedLetterOption">
								<div className="letter">{letter}</div>
							</div>
							<div className="answerText">{opt.title}</div>
						</div>
					);
				}
				return (
					<div
						key={i}
						className="answer"
						onClick={() => handleClick(question.id, opt.title, opt.score)}
					>
						<div className="letterOption">
							<div className="letter">{letter}</div>
						</div>
						<div className="answerText">{opt.title}</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default QuestionCard;

QuestionCard.propTypes = {
	id: PropTypes.string,
	handleClick: PropTypes.func,
	question: PropTypes.shape({ id: PropTypes.number, title: PropTypes.string }),
	answer: PropTypes.shape({ title: PropTypes.string, score: PropTypes.number }),
	options: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, score: PropTypes.number })),
};
