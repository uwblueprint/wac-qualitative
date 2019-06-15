import React from 'react';
import PropTypes from 'prop-types';

import '../styles/_summary.css';

const THRESHOLD_BIASED = [3, 100];
const THRESHOLD_SOMEWHAT_BIASED = [2, 3];
const THRESHOLD_NOT_BIASED = [0, 2];

const getColour = value => {
	let colour = '';
	if (typeof value == 'number') {
		switch (Math.floor(value)) {
			case 0:
			case 1:
				colour = 'green';
				break;
			case 2:
				colour = 'yellow';
				break;
			case 3:
				colour = 'red';
				break;
			default:
				break;
		}
	}

	return threshold => {
		if (threshold == null) return colour;
		if (value >= threshold[0] && value < threshold[1]) return colour;
		return '';
	};
};

const SummaryBox = ({ sectionTitle, sectionNumber, sectionValue }) => {
	const getStyle = getColour(sectionValue);
	return (
		<div className="figmaCard">
			<div className="boxboxbox">
				<h1 className="sectionNum"> Section {sectionNumber} </h1>
				<h1 className="sectionTitle"> {sectionTitle} </h1>
			</div>
			<div id="bar" />
			<div className={`outer-circle ${getStyle(THRESHOLD_BIASED)}-b`} id="left-circle">
				<div className="inner-circle">
					<p className={`circle-text ${getStyle(THRESHOLD_BIASED)}-c`} id="circle-left-text">
						Biased
					</p>
				</div>
			</div>
			<div className={`outer-circle ${getStyle(THRESHOLD_SOMEWHAT_BIASED)}-b`} id="left-circle">
				<div className="inner-circle">
					<p
						className={`circle-text ${getStyle(THRESHOLD_SOMEWHAT_BIASED)}-c`}
						id="circle-center-text"
					>
						Somewhat Biased
					</p>
				</div>
			</div>
			<div className={`outer-circle ${getStyle(THRESHOLD_NOT_BIASED)}-b`} id="left-circle">
				<div className="inner-circle">
					<p className={`circle-text ${getStyle(THRESHOLD_NOT_BIASED)}-c`} id="circle-right-text">
						Not Biased
					</p>
				</div>
			</div>
			<div id="rectangle" className={getStyle() + '-b'} />
		</div>
	);
};

export default SummaryBox;

SummaryBox.propTypes = {
	sectionTitle: PropTypes.string,
	sectionNumber: PropTypes.number,
	sectionValue: PropTypes.number,
};
