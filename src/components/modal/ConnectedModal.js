import { connect } from 'react-redux'
import {ModalBase} from "./ModalBase";


const mapStateToProps = (state, ownProps) => {

    const skiHill = state.OpenAndCloseModal.find((x)=> x.name === ownProps.name);
    return(
        {
            filter: skiHill.modalOpen,
            skiHill: skiHill
        }
    )
}







export default connect(mapStateToProps)(ModalBase);