import React from 'react';


export const NameInputAndLabel = (props) =>{


    return(
        <div className={'form-group'}>
            <label id={'name-label-a11y'} htmlFor={'name'}  >Name: </label>
            <input className={'form-control'} placeholder={'First and Last'} type={'text'} id={'name'} name={'name'} />
        </div>
    )
};