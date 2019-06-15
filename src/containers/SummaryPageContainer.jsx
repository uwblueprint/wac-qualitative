import { connect } from 'react-redux';

import SummaryPage from '../components/SummaryPage';

const mapStateToProps = state => {
	return {
    answers: state.answers,
    ...state,
	};
};

export default connect(
	mapStateToProps,
	null,
)(SummaryPage);
