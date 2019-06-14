import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementPageNum, decrementPageNum } from '../actions';
import QuestionnaireSection from '../components/QuestionnaireSection';

const mapStateToProps = state => {
	return {
		pageNum: state.pageNum,
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			incrementPageNum,
			decrementPageNum,
		},
		dispatch,
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(QuestionnaireSection);
