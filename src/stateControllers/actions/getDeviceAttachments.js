import axios from 'axios';

import {GET_DEVICE_ATTACHMENTS, GET_DEVICE_ATTACHMENTS_ERROR} from "./types";
import {estimoteCredentials} from "../../../estimote/estimoteAppConfig";


export const getDeviceAttachment = () =>{

    const url = "http://localhost:3090/getdevices";




    return dispatch =>{
        axios.get(url, {headers:{ authorization: " Basic bXN1LW11c2V1bS13ZWItZnJvbnRlbmQtNXB3OjM3NWIzMTE1NzM1YTdkZjk3ZGMzZGQ1YzNhZWZkYTk5",  }} )
            .then(response=>{
                console.log(response)
                dispatch({ type: GET_DEVICE_ATTACHMENTS, payload:response.data})
            })
            .catch(err=>{
                dispatch({type: GET_DEVICE_ATTACHMENTS_ERROR, payload: err})
            })
    }





};


// {auth:{
//     user: estimoteCredentials.appID,
//         password: estimoteCredentials.appToken
// }}