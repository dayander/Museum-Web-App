import React from 'react';

export const NameInputWithoutLabel = (props) => {
    return (
        <div className={'form-group'}>
            <input className={'form-control'} placeholder={'First and Last Name'} name={'name'} id={'name-no-label'} type={'text'}/>
        </div>
    )
}