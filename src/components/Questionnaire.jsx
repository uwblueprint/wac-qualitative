import React, { Component } from 'react';
import * as index from '../actions/index'

import QuestionnaireHeaderContainer from '../containers/QuestionnaireHeaderContainer';

class Questionnaire extends Component {
	render() {
		return (
			<div>
				<QuestionnaireHeaderContainer />
				{/* Call the export function with test data on click as proof of concept*/}
				<span onClick={() => index.exportCsv([{"question":"q1","answer":"a1"}])}>
					EXPORT CSV
				</span>
				<h1>Section {this.props.pageNum}</h1>
				Questionnaire Page
			</div>
		);
	}
}

export default Questionnaire;
