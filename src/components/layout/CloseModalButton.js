import React from 'react';


export const CloseModalButton = ({onClick, children}) =>{


    return(
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
};