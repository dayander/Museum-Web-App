import { connect } from 'react-redux'
import {InstructionsHeader} from "../layout/InstructionsHeader";


const mapStateToProps = state => (

    {
        filter: state.OpenAndCloseInstructions
    })




export default connect(
    mapStateToProps
)(InstructionsHeader)