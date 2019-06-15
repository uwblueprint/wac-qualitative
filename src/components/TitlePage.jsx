import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import logo from '../../public/images/largeLogo.png';
import avatar from '../../public/images/personIcon.png';
import '../styles/_title_page.css';
import '../styles/_buttons.css';
import '../App.css';

const TitlePage = ({ resetData }) => {
	return (
		<div>
			<div className="cardStyle">
				<div className="introText">
					<img style={{ marginBottom: '5%' }} src={logo} alt="Logo" />
					<h3>Welcome to the We All Count Data Biography&nbsp;Builder.</h3>
					<p>
						This tool is designed around the Data Equity Biography checklist. The tools helps you
						identify potential sources of bias in your dataset and gives you the chance to improve
						the equity in your use of the data.{' '}
					</p>
					<p>
						This tool is designed to be used to assess the level of bias that is present in dataset.
						This is designed to assess the level of bias prior to analysis. To get a sense of the
						sources and locations of potential bias in your data most completely you’ll need the a
						copy of the survey tool that was used to collect the data, the codebook, and the
						document that tells you how the data was sampled and collected.
					</p>
					<button className="primary">
						<Link to={{ pathname: `/questionnaire` }} onClick={resetData}>
							Begin
						</Link>
					</button>
					<div className="introPic">
						<img src={avatar} alt="Avatar" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TitlePage;

TitlePage.propTypes = {
	resetData: PropTypes.func,
};
