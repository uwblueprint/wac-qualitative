import React from 'react';
import PropTypes from 'prop-types';

import sections from '../survey_data.json';

class QuestionnaireSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      answers: {}
    };
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
		return (
			<div>
				<h1>Section {this.props.pageNum}</h1>
				{surveyPage.questions.map(el => {
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
			</div>
		);
	}
}

export default QuestionnaireSection;

QuestionnaireSection.propTypes = {
	pageNum: PropTypes.number,
};
