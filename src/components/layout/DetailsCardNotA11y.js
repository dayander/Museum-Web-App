import React from 'react';
import VisibleModalLink from '../containers/VisibleModalLink';
import ConnectedModalBase from '../modal/ConnectedModal';


export const DetailsCardNotA11y = (props) => {


  return(
      <div className={'details-wrapper'}>
          <h5>Details:</h5>
          <p>• Vertical: {props.vertical} </p>
          <p>• Trail Map: <VisibleModalLink {...props} >Click Here</VisibleModalLink></p>
          <ConnectedModalBase name={props.name}/>
      </div>
  )
};