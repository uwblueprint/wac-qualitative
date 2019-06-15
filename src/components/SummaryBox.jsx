import React from 'react';
import PropTypes from 'prop-types';

import '../styles/_summary.css';

const getStyle = (range, colour) => (value, isCircle) => {
	if (value >= range[0] && value < range[1]) {
		return colour + (isCircle ? '-c' : '-b');
	}
	return '';
};

const getBiasedStyle = getStyle([2, 5], 'red');
const getSomewhatBiasedStyle = getStyle([1, 2], 'yellow');
const getNotBiasedStyle = getStyle([0, 1], 'green');

const SummaryBox = ({ sectionTitle, sectionNumber, sectionValue }) => (
	<div className="figmaCard">
		<div className="boxboxbox">
			<h1 className="sectionNum"> Section {sectionNumber} </h1>
			<h1 className="sectionTitle"> {sectionTitle} </h1>
		</div>
		<div id="bar" />
		<div className={`outer-circle ${getBiasedStyle(sectionValue, false)}`} id="left-circle">
			<div className="inner-circle">
				<p className={`circle-text ${getBiasedStyle(sectionValue, true)}`} id="circle-left-text">
					Biased
				</p>
			</div>
		</div>
		<div className={`outer-circle ${getSomewhatBiasedStyle(sectionValue, false)}`} id="left-circle">
			<div className="inner-circle">
				<p
					className={`circle-text ${getSomewhatBiasedStyle(sectionValue, true)}`}
					id="circle-center-text"
				>
					Somewhat Biased
				</p>
			</div>
		</div>
		<div className={`outer-circle ${getNotBiasedStyle(sectionValue, false)}`} id="left-circle">
			<div className="inner-circle">
				<p
					className={`circle-text ${getNotBiasedStyle(sectionValue, true)}`}
					id="circle-right-text"
				>
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
