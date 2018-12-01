import { connect } from 'react-redux'
import { setAccessibilityFilter } from '../../stateControllers/actions/skiHillHeadingSwitcher';
import Link from '../layout/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.accessibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setAccessibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
