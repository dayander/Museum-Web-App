import React from 'react';
import {withRouter, Link } from "react-router-dom";



class MainNavWithErrors extends React.Component {
    render(){
        return(

            <div>
                <nav>
                    <div className={'container'}>
                        <ul className={'navbar-nav'}>
                            <li>
                                <Link to='/'>Home </Link>
                            </li>
                            <li>
                                <Link to='/contact'> Contact</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>

        )
    }
}


export default withRouter(MainNavWithErrors);
