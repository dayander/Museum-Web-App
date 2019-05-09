import {GET_ROOMS, DELETE_ROOM} from "../actions/types";

const initialState = [
    {
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

    }

];




export const roomsReducer= (state = initialState, action) =>{

    switch (action.type){
        case GET_ROOMS:
            return[...action.payload];

        case DELETE_ROOM:
            console.log('action', action.payload);
            console.log([...state.filter(room => room._id !== action.payload._id)])
            return [...state.filter(room => room._id !== action.payload._id)];





        default:
            return state
    }


};