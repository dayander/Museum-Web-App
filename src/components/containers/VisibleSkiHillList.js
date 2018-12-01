import { connect } from 'react-redux'
import {SkiHillList} from "../layout/SkiHillList";






const mapStateToProps = state => (

    {
        filter: state.SwitchSkiA11y
    });



export default connect(
    mapStateToProps
)(SkiHillList)