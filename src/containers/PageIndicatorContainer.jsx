import { connect } from "react-redux";
import PageIndicatorComponent from "../components/PageIndicator";

const mapStateToProps = state => {
  return {
    questions: state.questions,
    pageNum: state.pageNum
  };
};

export default connect(mapStateToProps)(PageIndicatorComponent);
