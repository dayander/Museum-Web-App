import axios from'axios';
import {UPDATE_EXHIBIT, UPDATE_EXHIBIT_ERROR} from "./types";
import FormData from 'form-data'


export const updateExhibit = (exhibitID, updateData, oldData) =>{

    console.log('id', exhibitID)
    console.log('udpated', updateData)
    console.log('old', oldData);


    let form = new FormData();

    //form.set('file');



    for(let key in updateData){

        if(updateData.hasOwnProperty(key) ){

            if(key==="appSections"){

                const appSec = JSON.stringify(updateData[key])

                form.set(key, appSec)
                // for (var k in updateData[key]) {
                //     if (updateData[key].hasOwnProperty(k)) {
                //
                //         for( var i in updateData[key][k]){
                //
                //             form.set(i+k, updateData[key][k][i])
                //         }
                //
                //         //k is index number
                //
                //         //works now just need to set form properties from objects
                //
                //
                //     }
                // }
                // updateData[key].forEach(e =>{
                //     console.log(JSON.stringify(updateData[key]))
                // })
            }else if(key.includes('MainImage')){
                form.set(key, updateData[key])
            }
            else{
                form.set(key, JSON.stringify(updateData[key]))
            }




        }
    }






    //const {userID, projectID } = ideaData;

    const query = exhibitID;


    const url = 'http://localhost:3090/exhibits/'+ query;

    return dispatch=>{
        axios.post(url, form)
            .then(response=>{
                dispatch({
                    type: UPDATE_EXHIBIT,
                    payload: response.data
                })




            })
            .catch(err=>{
                dispatch({
                    type: UPDATE_EXHIBIT_ERROR,
                    payload: err
                })

            })

    }

};