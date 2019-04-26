import React from 'react';
import {FormGroup} from 'react-bootstrap';
import {Field} from 'redux-form';
import ImageDisplay from "./ImageDispay";



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



export const DynamicEditExhibitSubSectionForm = (props) =>{

    const {element, i} = props;

    console.log(element.sectionImagePath);



    // const DyanmicField = (fieldType !== 'file')?
    //     (<Field component={'input'} type={fieldType} id={fieldID} name={fieldID} />)
    //     : (<Field component={FileInput} type={fieldType} id={fieldID} accept={accept} name={fieldID}  />);
    return(
        <div>
        <FormGroup>
            <label htmlFor={`appSections[${i}].sectionHeading`} > Section Heading-{i+1}  </label>
            <Field component={'input'}
                   type={'input'}
                   id={`appSections[${i}].sectionHeading`}
                   name={`appSections[${i}].sectionHeading`} />
        </FormGroup>


            <FormGroup>
                <label htmlFor={`appSections[${i}].sectionDescription`} > Section Description-{i+1}  </label>
                <Field component={'input'}
                       type={'input'}
                       id={`appSections[${i}].sectionDescription`}
                       name={`appSections[${i}].sectionDescription`} />
            </FormGroup>

            <ImageDisplay imageUpdateLabel={`New Exhibit Sub Image ${i +1}`}
                          imageUpdateID={`newExhibitMainImage-${i}`}
                          editImage={element.newImage}
                          path={element.sectionImagePath}
                          altText={element.sectionImageAltText}/>

            <FormGroup>
                <label htmlFor={`appSections[${i}].sectionImageAltText`} > Section Image Alt Text-{i+1}  </label>
                <Field component={'input'}
                       type={'input'}
                       id={`appSections[${i}].sectionImageAltText`}
                       name={`appSections[${i}].sectionImageAltText`} />
            </FormGroup>



        </div>


    )


};




