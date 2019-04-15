import React from 'react';

import NewExhibitForm from '../exhibits/NewExhibitForm';


class AddNewExhibitPage extends React.Component{

    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <h1>Add New Exhibit</h1>

                <NewExhibitForm/>


            </div>
        )
    }
};



export default AddNewExhibitPage;