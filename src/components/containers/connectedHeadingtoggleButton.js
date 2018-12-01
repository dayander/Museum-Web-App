import React from 'react';
import {HeadingToggleButton} from '../layout/HeadingToggleButton';
import { connect } from 'react-redux';



const mapStateToProps = (state) =>{
    return {
        isA11y: state.isA11y
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {


};


const ConnectedHeadingToggleButton = connect(mapStateToProps, mapDispatchToProps)(HeadingToggleButton);

export default ConnectedHeadingToggleButton;