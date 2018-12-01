import React from 'react';

import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";
import {A11yContactForm} from "./A11yContactForm";
import {NotA11yContactForm} from "./NotA11yContactFrom";

export const ContactForms = ({ filter }) => {

    if(filter === accessibilityFilters.SHOW_ACCESSIBLE){
        return(
            <A11yContactForm/>
        )
    }else if(filter === accessibilityFilters.SHOW_INACCESSIBLE){
        return(
            <NotA11yContactForm/>
        )
    }


};