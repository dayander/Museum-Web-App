import axios from 'axios';
import {reset} from 'redux-form';
import {AUTH_USER, AUTH_USER_ERR} from "../actions/types";


export const loginSubmit = (userLogin, callback) => {
    const tokenKey = 'token';
    const userID = 'userID';
    const userName= 'userName';

    return(dispatch)=>{
        axios.post('http://localhost:3090/login', userLogin)
            .then(response=>{
                dispatch({type: AUTH_USER, payload: response.data })

                dispatch({type: AUTH_USER, payload: response.data });

                localStorage.setItem(tokenKey, response.data.token);
                localStorage.setItem(userID, response.data.userID);
                localStorage.setItem(userName, response.data.userName);

                dispatch(reset('login'));
                callback()


            })
            .catch(e=>{
                dispatch({type: AUTH_USER_ERR, payload: e.response.data.error })

            })
    }


};


export const signup = (signUpData) =>{

    return function (dispatch) {
        axios.post("http://localhost:3090/signup", signUpData).then(response => {
            dispatch(reset('signup'));

        })
            .catch((err)=>{
                console.log(err);
                dispatch({type: "AUTH_USER_FAILURE", payload: err})
            })
    }


};



