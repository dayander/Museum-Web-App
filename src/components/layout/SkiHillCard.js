import React from 'react';
import {DetailsCardA11y} from "./DetailsCardA11y";
import {DetailsCardNotA11y} from "./DetailsCardNotA11y";





const LocationA11y =  (props) =>{
  return(
      <p>Location: {props.location}</p>
  )
};

const LocationNotA11y =  (props) =>{
    return(
        <p>{props.location}</p>
    )
};

export const SkiHillHeading2 = (props) => {

    return(
        <div>
            <h2>{props.name}</h2>
        </div>
    )
};


export const SkiHillHeading3 = (props) => {

    return(
        <div>
            <h3>{props.name}</h3>
        </div>
    )
};

export const SkiHillCardA11y = (props) => {

    return(
        <div className={'skihill-card-wrapper'}>
            <div className={'skihill-heading-location'}>
                <SkiHillHeading2 name={props.name} />
                <LocationA11y location={props.location} />
            </div>
            <DetailsCardA11y {...props} />

        </div>
    )
};


export const SkiHillCardNotA11y = (props) => {
    return(
        <div className={'skihill-card-wrapper'} >

            <div className={'skihill-heading-location'}>
                <SkiHillHeading3 name={props.name}/>
                <LocationNotA11y location={props.location}/>

            </div>
            <DetailsCardNotA11y {...props}/>
        </div>
    )
};




