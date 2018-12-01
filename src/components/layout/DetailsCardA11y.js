import React from 'react';
import VisibleModalLink from '../containers/VisibleModalLink';
import ConnectedModalBaseReactModal from '../modal/ConnectedModalReactModal';


export const DetailsCardA11y = (props) => (
    <div className={'details-wrapper'}>
        <h3>Details:</h3>
        <ul className={'details-list'}>
            <li>Vertical: {props.vertical}</li>
            <li><VisibleModalLink {...props} >See {props.name} Trail Map </VisibleModalLink> </li>
        </ul>
        <ConnectedModalBaseReactModal name={props.name}/>

    </div>
)