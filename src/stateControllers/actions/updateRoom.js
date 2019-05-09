import axios from 'axios'
import {UPDATE_ROOM, UPDATE_ROOM_ERROR} from "./types";



export const updateRoom = (updateData) =>{

    console.log(updateData)

    const roomID = updateData._id;


    return dispatch =>{
        axios.post(
            `http://localhost:3090/rooms/${roomID}`,
            updateData
        )
            .then(response=>{
                dispatch({type: UPDATE_ROOM, payload: response.data})
            })
            .catch(err=>{
                dispatch({type: UPDATE_ROOM_ERROR, payload: err})
            })
    }

};