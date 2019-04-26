import React from 'react';
import {DynamicEditExhibitSubSectionForm} from "../exhibits/DynamicEditExhibitSubSectionFroms";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Field, reduxForm, Control} from 'redux-form'
import {getSingleExhibit} from "../../stateControllers/actions/getExhibits";
import {addAppSection} from "../../stateControllers/actions/dynamicForms";
import {FormGroup} from 'react-bootstrap';
import ImageDisplay from "../exhibits/ImageDispay";
import {updateExhibit} from '../../stateControllers/actions/updateExhibits';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {deleteExhibit} from "../../stateControllers/actions/deleteExhibit";
import {withRouter} from 'react-router-dom';


class EditExhibitPage extends React.Component{
    constructor(props){
        super(props);

        this.deleteExhibit2 = this.deleteExhibit2.bind(this)
        console.log(this.props.match.params)
    }


    componentDidMount(){

        this.props.getSingleExhibit(this.props.match.params.id)

    }



    updateExhibitData(values){

        const exhibitID = this.props.match.params.id;
        const oldData = this.props.singleExhibit;

        this.props.updateExhibit(exhibitID, values, oldData)
    }

    deleteExhibit2(){
        this.props.deleteExhibit(this.props.match.params.id)
        this.props.history.push('/exhibits')
    }






    render(){

        const {initialValues, image, handleSubmit, deleteExhibit} = this.props;

        console.log('itiit', initialValues)
        console.log(initialValues.mainImg.path)

        let mainForm = (
            //probably need to set this in a form.
            <div>
                <FormGroup>
                    <label htmlFor={'name'} > Exhibit Name  </label>
                    <Field component={'input'} type={'text'} id={'name'} name={'name'} />
                </FormGroup>

                <FormGroup>
                    <label htmlFor={'subHead'} > Exhibit Subheading  </label>
                    <Field component={'input'} type={'text'} id={'subHead'} name={'subHead'} />
                </FormGroup>


                {/*<FormGroup>*/}
                    {/*<label htmlFor={'description'} > Exhibit Description  </label>*/}
                    {/*<Field component={'input'} type={'text'} id={'description'} name={'description'} />*/}
                {/*</FormGroup>*/}

                {/*Probably display image and have a button to add new image*/}

                <ImageDisplay imageUpdateLabel={'New Main Image'} imageUpdateID={'newExhibitMainImage'} editImage={image.newImage}  path={image.path} altText={image.altText}/>


                {/*Image Alt Text Field*/}
                {/*Published Field*/}

                <FormGroup>
                    <label htmlFor={'mainImg.altText'} > Exhibit Main Image Alt-Text  </label>
                    <Field component={'input'} type={'text'} id={'mainImg.altText'} name={'mainImg.altText'} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor={'subHead'} > Exhibit Subheading  </label>
                    <Field component={'input'} type={'text'} id={'subHead'} name={'subHead'} />
                </FormGroup>

                <FormGroup>
                    <label htmlFor={'published'}>Published: </label>
                    <Field name="published" id="published" component={'input'} type="checkbox"/>
                </FormGroup>





            </div>
        )


        let subSectionForms = initialValues.appSections.map((element, i) =>{

            console.log('i', 'render check', i)


            return <DynamicEditExhibitSubSectionForm key={i} element={element} i={i} />
        });






        return(
            <form encType={'multipart/form-data'} onSubmit={handleSubmit(values=> this.updateExhibitData(values))}>

                {mainForm}

                <h2> Exhibit Sub-sections</h2>

                {subSectionForms}

                <button type={'submit'}> Update Exhibit</button>

                <Button onClick={this.deleteExhibit2}>
                    Delete
                    <DeleteIcon/>
                </Button>

            </form>

        )
    }
}



EditExhibitPage = reduxForm({
    form: 'edit-exhibit-form',
    enableReinitialize: true

})(EditExhibitPage);


const mapStateToProps = (state) => ({
    initialValues: state.singleExhibit,
    image: state.singleExhibit.mainImg,
    singleExhibit: state.singleExhibit


});

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        updateExhibit,
        getSingleExhibit,
        addAppSection,
        deleteExhibit
    }, dispatch)

};





export default withRouter(connect(mapStateToProps, mapActionToDispatch) (EditExhibitPage));