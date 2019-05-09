import axios from 'axios';
import {reset} from 'redux-form';






export const AddNewRoom = (data, callback) =>{


    console.log('data',data);





    return function (dispatch) {
        axios.post('http://localhost:3090/newroom', data )
            .then(response=>{
                dispatch(reset('new-room-form'));
                callback()



            })
            .catch((err)=>{
                console.log(err);

            })
    }


};