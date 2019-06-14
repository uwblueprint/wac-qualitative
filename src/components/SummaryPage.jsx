import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SummaryBox from './SummaryBox';

import logo from '../../public/images/logo.png';
import '../styles/_summary.css';
import '../styles/header.css';
import Footer from './Footer';

class SummaryPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
		};
	}

	render() {
		const results = this.props.answers.map(section => {
			// remove unsures
			const filteredSection = section.filter(q => q.score < 99);
			const sectionAverage =
				filteredSection.reduce((sum, q) => sum + q.score, 0) / filteredSection.length;
			return {
				title: section.section,
				value: sectionAverage,
			};
		});
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
					{results.map((section, sectionNum) => {
						return (
							<SummaryBox
								sectionNumber={sectionNum + 1}
								sectionTitle={section.title}
								sectionValue={section.value}
							/>
						);
					})}
					<Link to={{ pathname: `/questionnaire` }}>Back</Link>
				</div>
				<Footer />
			</div>
		);
	}
}

export default SummaryPage;

SummaryPage.propTypes = {
	answers: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				score: PropTypes.number,
			}),
		),
	),
};

SummaryPage.defaultProps = {
	answers: [],
};
