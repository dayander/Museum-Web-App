import React from 'react';
import {FormGroup} from 'react-bootstrap';
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



export const DynamicFormBase = (props) =>{

    const {fieldLabel, fieldID ,fieldType, accept} = props;



    const DyanmicField = (fieldType !== 'file')?
        (<Field component={'input'} type={fieldType} id={fieldID} name={fieldID} />)
        : (<Field component={FileInput} type={fieldType} id={fieldID} accept={accept} name={fieldID}  />);
    return(
        <FormGroup>
            <label htmlFor={fieldID} > {fieldLabel}  </label>
            {DyanmicField}
            {/*<Field component={'input'} type={fieldType} id={fieldID}  />*/}


        </FormGroup>
    )


};




