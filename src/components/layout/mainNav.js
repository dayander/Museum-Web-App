import React from 'react';
import {withRouter, Link } from "react-router-dom";



class MainNav extends React.Component {
    render(){
        return(

                <div>
            <nav>
                <div className={'container'}>
                    <ul className={'navbar-nav'}>
                        <li>
                            <Link to='/mcardle/'>Home </Link>
                        </li>
                        <li>
                            <Link to='/mcardle/contact'> Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>

                </div>

        )
    }
}


export default withRouter(MainNav);
