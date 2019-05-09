import axios from 'axios';
import {GET_ROOMS, GET_ROOMS_ERROR, GET_SINGLE_ROOM, GET_SINGLE_ROOM_ERROR} from "./types";



export const getRooms = () =>{



    return (dispatch)=>{
        axios({
            method: 'get',
            url: 'http://localhost:3090/getrooms',
            // data: projectName,
        })
            .then((response)=>{


                dispatch({type: GET_ROOMS, payload: response.data})
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type: GET_ROOMS_ERROR })
            })
    }
}



export const getSingleRoom = (roomID)=>{


    return (dispatch)=>{
        axios({
            method: 'get',
            url: `http://localhost:3090/rooms/${roomID}`,
            // data: projectName,
        })
            .then((response)=>{


                dispatch({type: GET_SINGLE_ROOM, payload: response.data})
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type: GET_SINGLE_ROOM_ERROR })
            })
    }
}

