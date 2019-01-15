import React from 'react';
import ConnectedContactForms from '../containers/ConnectedContactForms';
import {PageTitle} from '../a11y/PageTitle';
import {PageFocus} from "../a11y/PageFocus";
import MainNavWithErrors from '../layout/mainNavWithErrors';

class ContactWithErrors extends React.Component{


    componentDidMount(){

        PageTitle('Contact Twin City Ski Areas');

        PageFocus()

    }





    render(){
        return(
            <div>
                <MainNavWithErrors/>
                <main>
                    <h1>Contact</h1>
                    <ConnectedContactForms/>
                </main>

            </div>
        )
    }
}
export default ContactWithErrors;