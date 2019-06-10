import React, { Component } from 'react';

import QuestionnaireHeaderContainer from '../containers/QuestionnaireHeaderContainer';

class Questionnaire extends Component {
	render() {
		return (
			<div>
				<QuestionnaireHeaderContainer />
				<h1>Section {this.props.pageNum}</h1>
				Questionnaire Page
			</div>
		);
	}
}

export default Questionnaire;
