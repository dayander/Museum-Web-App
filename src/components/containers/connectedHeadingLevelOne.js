import { connect } from 'react-redux'
import HeadingLevelOne from "../layout/HeadingLevelOne";




const mapStateToProps = state => ({

        filter: state.SwitchSkiA11y
});



export default connect(
    mapStateToProps
)(HeadingLevelOne)