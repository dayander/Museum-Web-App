import React from 'react';
import {requireAuth} from "../HOC/requireAuth";

import {Link} from 'react-router-dom'


const HeyPage = () =>{
    return(
        <div>
            why wont you work?
            <Link to={'/'}>
                home
            </Link>

        </div>
    )
};


export default requireAuth(HeyPage)


