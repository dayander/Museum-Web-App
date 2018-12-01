import { connect } from 'react-redux';
import {modalFilters, setModalFilter} from "../../stateControllers/actions/ModalActions";
import {CloseModalButton} from "../layout/CloseModalButton";





const mapDispatchToProps = (dispatch, ownProps) => (

    {

        onClick: () => dispatch(setModalFilter(modalFilters.MODAL_CLOSED, ownProps))
    })

const ConnectedClosedModalButton = connect(null, mapDispatchToProps)(CloseModalButton);


export default ConnectedClosedModalButton;