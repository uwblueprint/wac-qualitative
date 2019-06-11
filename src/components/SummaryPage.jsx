import React, { Component } from 'react';
import SummaryBox from './SummaryBox';

import logo from '../../public/images/logo.png';
import '../styles/_summary.css';
import '../styles/header.css';

const questions = [
	{ id: 1, title: 'question 1', val: 0 },
	{ id: 2, title: 'question 2', val: 1 },
	{ id: 3, title: 'lmao 3', val: 2 },
	{ id: 4, title: 'lmao 4', val: 1 },
	{ id: 5, title: 'lmao 5', val: 0 },
];

class SummaryPage extends Component {
	render() {
		return (
			<div>
				<div className="header-container summary-header">
					<div>
						<img className="logo" src={`/${logo}`} alt="Logo" />
					</div>
					<h2 className="text header">Dataset Bias Assessment Tool</h2>
					<h1 className="text title"> Summary of Results </h1>
				</div>
				<div className="box-container">
					{questions.map(question => (
						<SummaryBox
							sectionNumber={question.id}
							sectionTitle={question.title}
							sectionValue={question.val}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default SummaryPage;
