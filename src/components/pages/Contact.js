import React from 'react';
import ConnectedContactForms from '../containers/ConnectedContactForms';
import {PageTitle} from '../a11y/PageTitle';
import {PageFocus} from "../a11y/PageFocus";

class Contact extends React.Component{


    componentDidMount(){

        PageTitle('Contact Twin City Ski Areas');

        PageFocus()

    }





    render(){
        return(
            <div>
                <h1>Contact</h1>
                <ConnectedContactForms/>

            </div>
        )
    }
}
export default Contact;