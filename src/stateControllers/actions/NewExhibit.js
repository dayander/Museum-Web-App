import axios from 'axios';
import FormData from 'form-data'
import fs from 'file-system';






export const AddNewExhibit = (data, callback) =>{

    let form = new FormData();

    for(let key in data){
        if(data.hasOwnProperty(key)){
            form[key] = data[key]
        }
    }


    return function (dispatch) {
        axios.post('http://localhost:3090/newexhibit', form)
            .then(response=>{
                dispatch(reset('new-exhibit-form'));
                callback()



            })
            .catch((err)=>{
                console.log(err);

            })
    }


};