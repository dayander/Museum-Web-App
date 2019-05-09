import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeviceAttachment} from '../../stateControllers/actions/getDeviceAttachments';
import {getExhibits} from '../../stateControllers/actions/getExhibits';
import NewRoomForm from '../rooms/NewRoomForm';
import {withRouter} from 'react-router-dom';
import {AddNewRoom} from "../../stateControllers/actions/newRoom";
import {getFormMeta} from 'redux-form';



class NewRoomPage extends React.Component{

    constructor(props){
        super(props);

        this.newRoom = this.newRoom.bind(this)
    }



    componentDidMount(){
        this.props.getDeviceAttachment();
        this.props.getExhibits();

    }

    newRoom(data){

        this.props.AddNewRoom(data,  ()=>{
            this.props.history.push('/rooms')
        });
        //console.log(data)

    }


    render(){

        const {devices, exhibits} = this.props;
        return(
            <div>
                <NewRoomForm sendNewRoom={this.newRoom} exhibits={exhibits} devices={devices}/>



            </div>
        )
    }

}


const mapStateToProps = (state) =>{
    return({
        devices: state.beaconDevice.data,
        exhibits: state.exhibits,
        meta: getFormMeta('new-room-form')(state)
    })
}

const mapActionToDispatch = (dispatch) =>{
  return bindActionCreators({
      getDeviceAttachment,
      getExhibits,
      AddNewRoom
  }, dispatch)
};


export default withRouter(connect(mapStateToProps, mapActionToDispatch)(NewRoomPage));