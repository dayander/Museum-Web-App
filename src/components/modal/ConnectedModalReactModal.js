import { connect } from 'react-redux'
import {ModalBaseReactModal} from "./ModalBaseReactModal";
import {modalFilters} from "../../stateControllers/actions/ModalActions";
import {setModalFilter} from "../../stateControllers/actions/ModalActions";


const mapStateToProps = (state, ownProps) => {

    const skiHill = state.OpenAndCloseModal.find((x)=> x.name === ownProps.name);
    return(
        {
            filter: skiHill.modalOpen,
            skiHill: skiHill
        }
    )
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return(
        {
            onRequestClose: (e) => {
                return (dispatch(setModalFilter(modalFilters.MODAL_CLOSED, ownProps)))
            }
        }
    )
}




const ConnectedModalReactModal = connect( mapStateToProps, mapDispatchToProps)(ModalBaseReactModal);


export default ConnectedModalReactModal;