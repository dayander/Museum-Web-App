import {AUTH_USER, AUTH_USER_ERR} from "../actions/types";


const initialState = {


    authenticated: '',
    errorMessage: '',
    userID: '',
    userName: '',




};

export const authReducer=(state=initialState, action) =>{



    switch(action.type) {
        case AUTH_USER:
            return{
                ...state,
                authenticated: action.payload.token,
                userName: action.payload.userName,
                userID:action.payload.userID,
                errorMessage: ''
            };


        case AUTH_USER_ERR:
            return {...state, errorMessage: action.payload};

        default:
            return state;

    };

};
