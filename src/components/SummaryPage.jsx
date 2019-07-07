import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import SummaryBox from './SummaryBox';
import { exportCSV } from '../utils';
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
		const sectionAverage = sectionAnswers.length
			? sectionAnswers.reduce((sum, a) => sum + a.score, 0) / sectionAnswers.length
			: 3;
		return {
			title: section.section,
			value: sectionAverage,
		};
	});

const getSummary = answers =>
	sections.reduce(
		(summary, { questions }) =>
			summary.concat(
				questions.map(({ question }) => ({
					question: question.title,
					answer: (answers[question.id] || {}).title,
				})),
			),
		[],
	);

class SummaryPage extends React.Component {
	componentDidUpdate() {
		const totalAnswers = Object.values(this.props.answers).length;
		const totalQuestions = sections.reduce((total, section) => total.concat(section.questions), [])
			.length;
		if (totalAnswers > 0 && totalAnswers < totalQuestions) {
			this.props.history.push('/questionnaire');
		}
	}

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
					{getResults(this.props.answers).map((section, sectionNum) => (
						<SummaryBox
							key={sectionNum}
							sectionNumber={sectionNum + 1}
							sectionTitle={section.title}
							sectionValue={section.value}
						/>
					))}
					<div className="buttonContainer">
						<button className="secondary">
							<Link to={{ pathname: `/` }}>Start New</Link>
						</button>
						<button onClick={() => exportCSV(getSummary(this.props.answers))} className="primary">
							Save Results
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(SummaryPage);

SummaryPage.propTypes = {
	answers: PropTypes.object,
};

SummaryPage.defaultProps = {
	answers: {},
};
