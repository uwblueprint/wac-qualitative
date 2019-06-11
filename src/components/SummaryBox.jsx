import React from 'react';
import PropTypes from 'prop-types';

import '../styles/_summary.css';

const SummaryBox = ({ sectionTitle, sectionNumber, sectionValue }) => (
	<div className="figmaCard">
		<div className="boxboxbox">
			<h1 className="sectionNum"> Section {sectionNumber} </h1>
			<h1 className="sectionTitle"> {sectionTitle} </h1>
		</div>
		<div id="bar" />
		<div className={`outer-circle ${sectionValue == 0 ? 'red-b' : ''}`} id="left-circle">
			<div className="inner-circle">
				<p className={`circle-text ${sectionValue == 0 ? 'red-c' : ''}`} id="circle-left-text">
					Biased
				</p>
			</div>
		</div>
		<div className={`outer-circle ${sectionValue == 1 ? 'yellow-b' : ''}`} id="left-circle">
			<div className="inner-circle">
				<p className={`circle-text ${sectionValue == 1 ? 'yellow-c' : ''}`} id="circle-center-text">
					Somewhat Biased
				</p>
			</div>
		</div>
		<div className={`outer-circle ${sectionValue == 2 ? 'green-b' : ''}`} id="left-circle">
			<div className="inner-circle">
				<p className={`circle-text ${sectionValue == 2 ? 'green-c' : ''}`} id="circle-right-text">
					Not Biased
				</p>
			</div>
		</div>
		<div
			id="rectangle"
			className={`${sectionValue == 0 ? 'red-b' : `${sectionValue == 1 ? 'yellow-b' : 'green-b'}`}`}
		/>
	</div>
);

export default SummaryBox;

SummaryBox.propTypes = {
	sectionTitle: PropTypes.string,
	sectionNumber: PropTypes.number,
	sectionValue: PropTypes.number,
};
