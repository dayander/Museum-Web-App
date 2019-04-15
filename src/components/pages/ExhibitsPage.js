import React from 'react';
import {Link} from 'react-router-dom';



const ExhibitPage = () => {


    return(
        <div>
            <Link to={'/exhibits/newexhibit'}> Add New Exhibit </Link>

        </div>
    )

};



export default ExhibitPage;