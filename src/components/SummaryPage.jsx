import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SummaryBox from './SummaryBox';
import { exportCSV } from '../actions';
import sections from '../survey_data.json';

import logo from '../../public/images/logo.png';
import '../styles/_summary.css';
import '../styles/header.css';
import Footer from './Footer';

const getResults = answers =>
	sections.map(section => {
		const sectionAnswers = section.questions
			.map(({ question }) => answers[question.id])
			.filter(answer => answer && answer.score && answer.score < 99);
		const sectionAverage =
			sectionAnswers.reduce((sum, a) => sum + a.score, 0) / sectionAnswers.length;
		return {
			title: section.section,
			value: sectionAverage,
		};
	});

const getSummary = answers =>
	sections.reduce(
		(summary, section) =>
			summary.concat(
				section.questions.map(({ question }) => ({
					question: question.title,
					answer: (answers[question.id] || {}).title,
				})),
			),
		[],
	);

class SummaryPage extends React.Component {
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
					{getResults(this.props.answers).map((section, sectionNum) => {
						return (
							<SummaryBox
								sectionNumber={sectionNum + 1}
								sectionTitle={section.title}
								sectionValue={section.value}
							/>
						);
					})}
					<button>
						<Link to={{ pathname: `/questionnaire` }}>Back</Link>
					</button>
					<button onClick={() => exportCSV(getSummary(this.props.answers))}>Save Results</button>
				</div>
				<Footer />
			</div>
		);
	}
}

export default SummaryPage;

SummaryPage.propTypes = {
	// answers: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		title: PropTypes.string,
	// 		score: PropTypes.number,
	// 	}),
	// ),
};

SummaryPage.defaultProps = {
	answers: [],
};
