import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRooms} from '../../stateControllers/actions/getRooms';
import {RoomList} from "../rooms/RoomList";




class RoomsPage extends React.Component{

    constructor(props){
        super(props);

    }


    componentDidMount(){
        console.log(this.props)
        this.props.getRooms()

    }


    render(){

        const {rooms} = this.props;

        return(
            <div>
                <Link to={'/rooms/newroom'}>
                    New Room
                </Link>


                <RoomList rooms={rooms}/>
            </div>
        )
    }

}


const mapStateToProps = (state) =>{

    return({

        rooms: state.rooms

    })
};


const mapActionToDispatch = (dispatch)=>{

    return bindActionCreators({
        getRooms

    }, dispatch)


};



export default connect(mapStateToProps, mapActionToDispatch)(RoomsPage);