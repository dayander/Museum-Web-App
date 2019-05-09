import axios from 'axios';
import {DELETE_ROOM, DELETE_ROOM_ERROR} from "./types";





export const deleteRoom = (roomID, callback) =>{

    const url = `http://localhost:3090/rooms/${roomID}`;

    return (dispatch)=>{
        axios.delete(url)
            .then((response)=>{
                dispatch({type: DELETE_ROOM, payload:response.data})
                callback.push('/rooms')


            })
            .catch(err=>{
                dispatch({type:DELETE_ROOM_ERROR, payload: err})
            })
    }

};