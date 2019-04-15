import React from 'react';
import {requireAuth} from "../HOC/requireAuth";

import {Link} from 'react-router-dom'


const HomePage = () =>{
    return(
        <div>
           why wont you work?
            <Link to={'./hey'}>
                hey
            </Link>

        </div>
    )
};


export default requireAuth(HomePage)


