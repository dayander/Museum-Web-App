import React from 'react';


export const MessageInputWithoutLabel = (props) => {


    return(
        <div className={'form-group'}>
            <textarea className={'form-control'} placeholder={'Message...'} name={'message'} id={'message-input-no-label'} ></textarea>
        </div>
    )
};
