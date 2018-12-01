import React from 'react';
import {SkiHillCardA11y, SkiHillCardNotA11y} from "./SkiHillCard";
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";

export const SkiHillList = ({skiHills, filter}) => {

    if(filter === accessibilityFilters.SHOW_ACCESSIBLE){
        return(
            <div className={'flexer'}>
                {skiHills.map((ski, i)  => <SkiHillCardA11y key={i} {...ski}/>)}

            </div>
        )
    }else if(filter === accessibilityFilters.SHOW_INACCESSIBLE){
        return(
        <div className={'flexer'}>
            {skiHills.map((ski, i)  => <SkiHillCardNotA11y key={i} {...ski}/>)}

        </div>
        )
    }


};