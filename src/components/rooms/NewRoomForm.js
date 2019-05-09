import React from 'react';


import { Field, reduxForm, Control} from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addAppSection} from "../../stateControllers/actions/dynamicForms";
import {AddNewExhibit} from '../../stateControllers/actions/NewExhibit';
import {FormGroup} from 'react-bootstrap'
import {DynamicFormBase} from '../forms/DynamicFormBase';
import {withRouter} from 'react-router-dom';
//import 'react-widgets/dist/css/react-widgets.css'


// accessible check boxes https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/checkbox/checkbox-2.html


//
//
// const mapStateToProps = (state) => ({
//     devices: state.beaconDevice.data
//
// });
//
// const mapActionToDispatch= (dispatch)=>{
//     return bindActionCreators({
//
//
//     }, dispatch)
//
// };


class NewRoomForm extends React.Component {

    constructor(props) {
        super(props);


    }


    componentDidMount() {


    }


    render() {
        const {devices, exhibits, sendNewRoom, handleSubmit} = this.props;

        console.log(devices);


        const devicesAvailable = devices.map((device, i) => {
            return (
                <option value={JSON.stringify(device)} data-id={device.id} data-identifer={device.identifier} key={i}>
                    {device.payload.roomName}

                </option>)
        });


        const exhibitsAvailable = exhibits.map((exhibit, i) => {

            return (
                <li key={i}>
                    <label>
                        {exhibit.name}
                        <Field  name={exhibit.name} id={exhibit._id} component={'input'} type="checkbox"/>
                    </label>
                </li>
            )

        })

        const exhibitRender = ({item})=>(
            <div>
                <img style={{maxWidth: '50px'}} src={`http://localhost:3090${item.mainImg.path}`} alt={item.mainImg.altText}/>
                <span>{item.name}</span>
            </div>
        )

        const exhibitValueField = ({item})=>(
            <div>
                <img style={{maxWidth: '50px'}} src={`http://localhost:3090${item.mainImg.path}`} alt={item.mainImg.altText}/>
                <span>{item.name}</span>
            </div>

        )

        const exhibitMultiSelect= ({input, data, itemComponent,tagComponent})=>(
            <Multiselect {...input}
                data={data} itemComponent={itemComponent} tagComponent={tagComponent} value={input.value || []} onBlur={() => input.onBlur()}


            />
        )


        return (
            <div>
                <form onSubmit={handleSubmit(sendNewRoom)}>


                    <FormGroup>
                        <label htmlFor={'newRoomName'}>New Room Name: </label>
                        <Field name="newRoomName" id="newRoomName" component={'input'} type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor={'deviceSelector'}>Beacon in Room: </label>
                        <Field name="deviceSelector" component="select">
                            <option></option>
                            {devicesAvailable}
                        </Field>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'exhibitSelector'}>Exhibits in Room: </label>
                        {/*<Multiselect*/}
                            {/*data={exhibits}*/}
                            {/**/}
                            {/*name={'exhibitSelector'}*/}
                            {/*itemComponent={exhibitRender}*/}
                            {/*tagComponent={exhibitValueField}*/}

                        {/*/>*/}

                        <Field
                            data={exhibits}
                            component={exhibitMultiSelect}

                            name={'exhibitSelector'}
                            itemComponent={exhibitRender}
                            tagComponent={exhibitValueField}

                        />

                    </FormGroup>



                    <button type={'submit'}>Save</button>
                </form>


            </div>
        )
    };
}


NewRoomForm = reduxForm({
    form: 'new-room-form'
})(NewRoomForm);


export default NewRoomForm;