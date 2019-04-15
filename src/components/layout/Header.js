import React from 'react';
import MainNav from './mainNav';

import {connect} from 'react-redux';




let Header = (props) => {

let nav = (<MainNav/>);
let noNav = ('');

console.log(props)

    return(
        <header>
            <div id={'top-holder'} className={'fixed-top'}>

                {props.auth.authenticated? nav: noNav}
            </div>
        </header>
    )
};


const mapStateToProps=(state)=>({
   auth: state.auth
});



export default connect(mapStateToProps)(Header)