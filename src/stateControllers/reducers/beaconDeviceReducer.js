import {GET_DEVICE_ATTACHMENTS} from "../actions/types";

const initialState = {

    "meta": {
        "page": 1,
        "total": 0,
        "total_count": 0,
        "perPage": 300
    },
    data: [
        {
            "id": 10000,
            "for": "",
            "identifier": "",
            "public": false,
            "payload": {
                "roomName": ""
            },
            "created_at": "",
            "updated_at": ""
        }]

};


export const beaconDeviceReducer = (state= initialState, action)=>{

    switch (action.type){

        case GET_DEVICE_ATTACHMENTS:

            return {...state, ...action.payload}





        default:
            return state
    }


};