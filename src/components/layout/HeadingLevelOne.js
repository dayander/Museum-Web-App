import React from 'react';
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";


const HeadingLevelOne =({ children, filter})=> {
        let styles;

        if(filter === accessibilityFilters.SHOW_ACCESSIBLE){
            styles = {
                color: "#000"
            };
        }else {
            styles = {
                color: "#808080"
            };
        }

    return(

    <h1 style={styles}>{children}</h1>

)

}


export default HeadingLevelOne;