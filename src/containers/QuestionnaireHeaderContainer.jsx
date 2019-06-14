import { connect } from 'react-redux';

import QuestionnaireHeader from '../components/QuestionnaireHeader';

const mapStateToProps = state => {
	return {
		pageNum: state.pageNum,
	};
};

export default connect(
	mapStateToProps,
	null,
)(QuestionnaireHeader);
