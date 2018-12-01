import React from 'react';
import {modalFilters} from "../../stateControllers/actions/ModalActions";
import ConnectedCloseModalButton from '../containers/ConnectedCloseModalButton';



export const ModalBase = ({filter, skiHill}) => {


    if(filter === modalFilters.MODAL_OPENED){
        // let app = window.document.querySelector('body');
        // app.style.overflow = 'hidden';



        return(

            <div className={'modal-wrapper'}>
                <div className={'modal-popover'}>
                    <div className={'modal-heading-box'}>
                        <h2>{skiHill.name} Trail Map</h2>
                    </div>

                    <div className={'well'}>
                        <div className={'modal-img-wrapper'}>
                            <img src={skiHill.imgPath} />
                        </div>

                        <p>Photo Courtesy of: <a href={skiHill.imgSourceURL}>{skiHill.imgSourceURL}</a> </p>
                    </div>

                    <div className={'modal-close-box'}>
                    <ConnectedCloseModalButton {...skiHill}>
                        Close Trail Map
                    </ConnectedCloseModalButton>
                    </div>

                </div>
            </div>

        )
    }else{
        // let app = document.querySelector('body');
        // app.style.overflow = '';



  return(
      null
  )}
};