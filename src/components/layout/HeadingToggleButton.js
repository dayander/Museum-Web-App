import React from 'react';
import { connect } from 'react-redux'
import {ShowAllAccessibility} from '../../stateControllers/actions/skiHillHeadingSwitcher'

let HeadingToggleButton = ({ dispatch})=>{
        return <button onClick={()=> dispatch(ShowAllAccessibility(true))}>toggle a11y</button>
};



HeadingToggleButton = connect()(HeadingToggleButton)

export default  HeadingToggleButton;

