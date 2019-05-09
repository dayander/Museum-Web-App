import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Field, reduxForm, Control, getFormMeta} from 'redux-form'
import {getSingleRoom} from '../../stateControllers/actions/getRooms';
import {getDeviceAttachment} from '../../stateControllers/actions/getDeviceAttachments';
import {getExhibits} from '../../stateControllers/actions/getExhibits';
import{FormGroup} from 'react-bootstrap';
import Multiselect from 'react-widgets/lib/Multiselect'
import {updateRoom} from "../../stateControllers/actions/updateRoom";
import {deleteRoom} from "../../stateControllers/actions/deleteRoom";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';







class EditRoomPage extends React.Component{
    constructor(props){
        super(props);


        this.deleteRoom = this.deleteRoom.bind(this)
    }

    componentDidMount(){
        this.props.getSingleRoom(this.props.match.params.id)
        this.props.getDeviceAttachment();
        this.props.getExhibits();

    }


    roomUpdate(e){

        //const roomID = this.props.match.params.id;
        this.props.updateRoom(e)
    }


    deleteRoom(){

        this.props.deleteRoom(this.props.match.params.id, this.props.history);


    }



    render(){
        console.log('props',this.props);
        const {devices, room, sendNewRoom, handleSubmit, exhibits} = this.props;




        const devicesAvailable = devices.map((device, i) => {
            return (
                <option name={'device.payload.roomName'}
                        id={'device.payload.roomName'}
                        value={device.payload.roomName} data-id={device.id} data-identifer={device.identifier} key={i}>
                    {device.payload.roomName}

                </option>)
        });




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
                <form onSubmit={handleSubmit(this.props.updateRoom)} >


                    <FormGroup>
                        <label htmlFor={'name'}>New Room Name: </label>
                        <Field name="name" id="name" component={'input'} type="text"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor={'device.payload.roomName'}>Beacon in Room: </label>
                        <Field defaultValue={room.device} name="device.payload.roomName" component="select">
                            <option></option>
                            {devicesAvailable}
                        </Field>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'exhibitSelector'}>Exhibits in Room: </label>

                        <Field
                            data={exhibits}
                            component={exhibitMultiSelect}

                            name={'exhibits'}
                            itemComponent={exhibitRender}
                            tagComponent={exhibitValueField}

                        />

                    </FormGroup>



                    <button type={'submit'}>Save</button>


                    <Button onClick={this.deleteRoom}>
                        Delete
                        <DeleteIcon/>
                    </Button>
                </form>


            </div>
        )

    }
}


EditRoomPage = reduxForm({
    form: 'edit-room-form',
    enableReinitialize: true
})(EditRoomPage);


const mapStateToProps = (state)=>{

    return({
        room: state.singleRoom,
        initialValues: state.singleRoom,
        devices: state.beaconDevice.data,
        exhibits: state.exhibits,
        meta: getFormMeta('edit-room-form')(state)

    })
};


const mapActionToDispatch = (dispatch)=>{
    return bindActionCreators({
        getSingleRoom,
        getDeviceAttachment,
        getExhibits,
        updateRoom,
        deleteRoom
    }, dispatch)
}





export default connect(mapStateToProps, mapActionToDispatch)(EditRoomPage)