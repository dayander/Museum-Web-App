import { connect } from 'react-redux'
import {ContactForms} from "../layout/ContactForms";







const mapStateToProps = state => ({

    filter: state.SwitchSkiA11y
});

const ConnectedContactForms = connect(mapStateToProps)(ContactForms);

export default ConnectedContactForms;