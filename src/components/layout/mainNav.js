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
                                <Link to='/'>Home </Link>
                            </li>
                            <li>
                                <Link to='/rooms'>Rooms </Link>
                            </li>
                            <li>
                                <Link to='/exhibits'>Exhibits </Link>
                            </li>

                            <li>
                                <Link to='/floors'>Floors </Link>
                            </li>


                        </ul>
                    </div>

                </nav>

            </div>

        )
    }
}


export default withRouter(MainNav);
