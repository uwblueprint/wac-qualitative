import { connect } from "react-redux";
import PageIndicatorComponent from "../components/PageIndicator";

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps)(PageIndicatorComponent);
