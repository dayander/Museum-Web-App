import {GET_SINGLE_ROOM} from "../actions/types";

const initialState = {

        device: {
            payload: {
                roomName: ""
            },
            id: 1,
            identifier: ""
        },
        exhibits: [
            {
                mainImg: {
                    altText: "",
                    newImage: false,
                    path: ""
                },
                _id: "",
                appSections: [],
                name: "",
                subHead: "",
                published: true,

            }
        ],
        _id: "",
        name: ""

    };






export const singleRoomReducer= (state = initialState, action) =>{

    switch (action.type){
        case GET_SINGLE_ROOM:
            return{...action.payload};





        default:
            return state
    }


};