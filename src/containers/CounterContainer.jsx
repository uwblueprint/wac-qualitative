import { connect } from 'react-redux'
import { count } from '../actions/actions'
import CounterComponent from '../components/Counter'

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
            dispatch(count.increment(ownProps.count + 1))
        },
        decrement: () => {
            dispatch(count.decrement(ownProps.count - 1))
        }
    }
}

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent)

export default Counter