import axios from 'axios';
import {DELETE_EXHIBIT, DELETE_EXHIBIT_ERROR} from "./types";





export const deleteExhibit = (exhibitID) =>{

    const url = `http://localhost:3090/exhibits/${exhibitID}`;

    return (dispatch)=>{
        axios.delete(url)
            .then((response)=>{
                dispatch({type: DELETE_EXHIBIT, payload:response.data})
            })
            .catch(err=>{
                dispatch({type:DELETE_EXHIBIT_ERROR, payload: err})
            })
    }

}