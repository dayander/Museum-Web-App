import axios from 'axios';
import FormData from 'form-data'
import {reset} from 'redux-form';






export const AddNewExhibit = (data, callback) =>{

    const config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    };


//    'Content-Type': 'application/x-www-form-urlencoded'


    let form = new FormData();


    form.set('file', data.newExhibitImage);

    console.log(data)


    for(let key in data){
        if(data.hasOwnProperty(key)){



            form.set(key, data[key])
            //form[key] = data[key]
        }
    }

    console.log(form);

    return function (dispatch) {
        axios.post('http://localhost:3090/newexhibit', form )
            .then(response=>{
                dispatch(reset('new-exhibit-form'));
                callback()



            })
            .catch((err)=>{
                console.log(err);

            })
    }


};