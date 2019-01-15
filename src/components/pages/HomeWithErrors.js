import React from 'react';
import {PageTitle} from '../a11y/PageTitle';
import {PageFocus} from "../a11y/PageFocus";
import SkiHillData from '../../data/SkiHillData'
import VisibleSkiHillList from "../containers/VisibleSkiHillList";
import MainNav from '../layout/mainNav';


import ConnectedHeadingLevelOne from "../containers/connectedHeadingLevelOne";

class HomeWithErrors extends React.Component{



    componentDidMount() {
        PageTitle("Greater Twin Cities Ski Hills Home");


        // Set focus to the content container
        PageFocus();




    }



    render(){

        return(
            <div>
                <MainNav/>
            <main >
                <div>

                    <ConnectedHeadingLevelOne>
                        Twin Cities Ski Areas
                    </ConnectedHeadingLevelOne>

                    <VisibleSkiHillList skiHills={SkiHillData} />


                </div>
            </main>

            </div>



        )
    }

}







export default HomeWithErrors;