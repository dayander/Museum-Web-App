import React from 'react'
import {connect} from 'react-redux';
import ExhibitPreviewCard from './ExhibitPreviewCard';



export const ExhibitList = (props) =>{

    const {exhibits} = props;

    console.log(exhibits);


    const exhibitsList = exhibits.map((exhibit, i) =>{


        return(
            <li key={i}>

                <ExhibitPreviewCard
                    imagePath={exhibit.mainImg.path}
                    name={exhibit.name}
                    published={exhibit.published}
                    id={exhibit._id}
                />
            </li>
        )
    })


    return(
        <div>
            <ol>
                {exhibitsList}
            </ol>
        </div>
    )
}