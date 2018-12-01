import React from 'react';
import {modalFilters} from "../../stateControllers/actions/ModalActions";
import ReactModal from 'react-modal';
import ConnectedCloseModalButton from '../containers/ConnectedCloseModalButton';
export const ModalBaseReactModal = ({filter, skiHill, onRequestClose}) => {

    let opener;

    if (filter === modalFilters.MODAL_OPENED) {

        let app = document.querySelector('body');
        app.style.overflow = 'hidden';
        opener = true;





        return (
            <ReactModal  isOpen={opener} onRequestClose={onRequestClose}   shouldCloseOnEsc={true} contentLabel="Trail Map Modal" ariaHideApp={false}>
                <div className={'modal-wrapper'}>
                    <div className={'modal-popover'}>
                        <div className={'modal-heading-box'}>
                            <h2>{skiHill.name} Trail Map</h2>
                        </div>

                        <div className={'well'}>
                            <div className={'modal-img-wrapper'}>
                                <img src={skiHill.imgPath}  alt={skiHill.trailMapAlt}/>
                            </div>

                            <p>Photo Courtesy of: <a href={skiHill.imgSourceURL}>{skiHill.imgSourceURL}</a></p>
                        </div>

                        <div className={'modal-close-box'}>
                            <ConnectedCloseModalButton {...skiHill}>
                                Close Trail Map
                            </ConnectedCloseModalButton>
                        </div>

                    </div>
                </div>
            </ReactModal>

        )
    }else {

        let app = document.querySelector('body');
        app.style.overflow = '';
        opener = false;

        return(
            null
        )
    }
}



