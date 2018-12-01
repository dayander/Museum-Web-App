import React from 'react';
import {NameInputWithoutLabel} from "./nameInputWithoutLabel";
import {MessageInputWithoutLabel} from "./MessageInputWithoutLabel";
import {SubmitContactButton} from "./SubmitContactButton";


export const NotA11yContactForm = (props) => {

    return(
        <div className={'contact-wrapper'}>
            <form>
                <NameInputWithoutLabel/>
                <MessageInputWithoutLabel/>
                <SubmitContactButton />
            </form>
        </div>
    )


};