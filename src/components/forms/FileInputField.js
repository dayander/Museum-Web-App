import React from 'react';

import {Field} from 'redux-form';



const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
                       input: { value: omitValue, onChange, onBlur, ...inputProps },
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};


export const FileInputField = (props) =>{
    const {fieldLabel, fieldID ,fieldType, accept} = props;


    return(<div>
        <label htmlFor={fieldID}>
            {fieldLabel}
        </label>

        <Field component={FileInput} type={'file'} accept={'.jpg, .png, .jpeg'} name={fieldID} id={fieldID}  />

    </div>)

}
