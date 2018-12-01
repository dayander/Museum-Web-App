import React from 'react';
import FilterLink from '../containers/FilterLink';
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";


export const FilterButtonHolder = () => (
    <div className={'filter-button-wrapper'}>
        <FilterLink filter={accessibilityFilters.SHOW_ACCESSIBLE}>
            Show Accessible Version
        </FilterLink>

        <FilterLink filter={accessibilityFilters.SHOW_INACCESSIBLE}>
           Show Not Accessible Version
        </FilterLink>
    </div>
)