import React from 'react';


export const MessageInputAndLabel = (props) =>{


    return(
        <div className={'form-group'} >
            <label id={'message-label-a11y'} htmlFor="message" >Message: </label>
            <textarea className={'form-control'} placeholder={'Message'} type={'text'} id={'message'} name={'message'} />
        </div>
    )
};