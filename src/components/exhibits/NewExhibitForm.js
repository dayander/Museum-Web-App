import React from 'react'
import { Field, reduxForm, Control} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addAppSection} from "../../stateControllers/actions/dynamicForms";
import {AddNewExhibit} from '../../stateControllers/actions/NewExhibit';
import {FormGroup} from 'react-bootstrap'
import {DynamicFormBase} from '../forms/DynamicFormBase';
import {withRouter} from 'react-router-dom';


class NewExhibitForm extends React.Component{

    constructor(props){
        super(props);

        
    this.appSectionAdd = this.appSectionAdd.bind(this);


    }

    appSectionAdd(e){
        e.preventDefault();
        this.props.addAppSection(this.props.appSectionNumber)
    }



    submitNewExhibit = values => {

        this.props.AddNewExhibit(values, ()=>{
            this.props.history.push('/exhibits')
        });


    };



    componentDidMount(){





    }

    render(){

    const {handleSubmit, newExhibitForm, addAppSection, appSectionNumber} = this.props;



        let exhibitForm = newExhibitForm.map((element, i) =>{


            return <DynamicFormBase key={i} {...element} />
        });

    return(
        <div>
        <form encType={'multipart/form-data'} onSubmit={handleSubmit(this.submitNewExhibit)}>

            {exhibitForm}

            <FormGroup>
                <button type={'button'} onClick={this.appSectionAdd}>Add Section</button>
            </FormGroup>

            <FormGroup>
                <label htmlFor={'published'}>Published: </label>
                <Field name="published" id="published" component={'input'} type="checkbox"/>
            </FormGroup>

            <button type={'submit'}>Save</button>
        </form>



        </div>
    )
    }

};


NewExhibitForm = reduxForm({
    form: 'new-exhibit-form'
})(NewExhibitForm);


const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage,
    newExhibitForm: state.dynamicForm.newExhibitForm.fields,
    appSectionNumber: state.dynamicForm.addedSections
});

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        AddNewExhibit,
        addAppSection
    }, dispatch)

};



export default withRouter(connect(mapStateToProps, mapActionToDispatch)(NewExhibitForm));