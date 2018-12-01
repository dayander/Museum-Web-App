import { connect } from 'react-redux'
import {setInstructionsFilter} from "../../stateControllers/actions/OpenAndCloseIntructionsHeader";
import {instructionsFilters} from "../../stateControllers/actions/OpenAndCloseIntructionsHeader";
import Link from '../layout/Link'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => (

    {

    onClick: () => dispatch(setInstructionsFilter(instructionsFilters.INSTRUCTIONS_CLOSED))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
