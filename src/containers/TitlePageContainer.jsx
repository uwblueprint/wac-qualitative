import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetData } from '../actions';
import TitlePage from '../components/TitlePage';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			resetData,
		},
		dispatch,
	);

export default connect(
	null,
	mapDispatchToProps,
)(TitlePage);
