import React from 'react'
import { Field, reduxForm, Control} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import DropZoneField from "../imageUpload/dropzone";

import {AddNewExhibit} from '../../stateControllers/actions/NewExhibit';



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


class NewExhibitForm extends React.Component{

    constructor(props){
        super(props);

        



    }



    submitNewExhibit = values => {

        this.props.AddNewExhibit(values, ()=>{
            this.props.history.push('./exhibits')
        });


    };



    componentDidMount(){

    }

    render(){

    const {handleSubmit, AddNewExhibit} = this.props;
        //const { input: { value } } = this.props

    return(
        <form enctype="multipart/form-data" onSubmit={handleSubmit(this.submitNewExhibit)}>

            <label htmlFor={'newExhibitName'}> Exhibit Name</label>
            <Field id={'newExhibitName'} component={'input'} type={'text'} name={'newExhibitName'} />

            <label htmlFor={'newExhibitTitle'}> Exhibit Title</label>
            <Field id={'newExhibitTitle'} component={'input'} type={'text'} name={'newExhibitTitle'} />


            <label htmlFor={'newExhibitDescription'}> Exhibit Description</label>
            <Field id={'newExhibitDescription'} component={'input'} type={'textarea'} name={'newExhibitDescription'} />

            <label htmlFor={'newExhibitImage'}> Exhibit Image</label>
            <Field component={FileInput} id={'newExhibitImage'}   type={'file'}  name={'newExhibitImage'} accept={'.jpg, .png, .jpeg'} />

            <button type={'submit'}>Save</button>
        </form>
    )
    }

};


NewExhibitForm = reduxForm({
    form: 'new-exhibit-form'
})(NewExhibitForm);


const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage
});

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        AddNewExhibit,
    }, dispatch)

}







export default connect(null, mapActionToDispatch)(NewExhibitForm);