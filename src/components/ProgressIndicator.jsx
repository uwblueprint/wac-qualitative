import React from 'react';
import PropTypes from 'prop-types';

const ProgressIndicator = ({ pageNum, sections }) => (
	<div>
		<ol className="ProgressBar">
			{sections.map((_, i) => {
				let stepClassName = 'ProgressBar-step';
				if (i < pageNum) {
					stepClassName += ' is-complete';
				} else if (i === pageNum) {
					stepClassName += ' is-current';
				}

				return (
					<li className={stepClassName} key={i}>
						<svg
							className="ProgressBar-icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
						</svg>
					</li>
				);
			})}
		</ol>
	</div>
);

export default ProgressIndicator;

ProgressIndicator.propTypes = {
	pageNum: PropTypes.number,
	sections: PropTypes.array,
};
