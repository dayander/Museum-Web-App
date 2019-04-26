import axios from 'axios';
import {GET_EXHIBITS, GET_EXHIBITS_ERROR, GET_SINGLE_EXHIBIT, GET_SINGLE_EXHIBIT_ERROR} from "./types";


// export const getExhibits = () =>{
//
//     console.log('hey')
//
//     //
//     // const url = 'http://localhost:3090/exhibits';
//     //
//     //
//     //
//     // axios.get(url)
//     //     .then(response=>{
//     //         dispatch({ type: GET_EXHIBITS, payload: response.data})
//     //     })
//     //     .catch(err=>{
//     //         console.log(err)
//     //         dispatch({type: GET_EXHIBITS_ERROR })
//     //     })
//
// };


export const getSingleExhibit = (exhibitId)=>{

    return(dispatch)=>{
        axios({
            method: 'get',
            url: `http://localhost:3090/exhibits/${exhibitId}`,
        })
            .then(response=>{
                dispatch({type: GET_SINGLE_EXHIBIT , payload: response.data})

            })
            .catch(err=>{
                dispatch({type: GET_SINGLE_EXHIBIT_ERROR })
            })

    }

};




export const getExhibits=(projectName) =>{


    return (dispatch)=>{
        axios({
            method: 'get',
            url: 'http://localhost:3090/exhibits',
            // data: projectName,
        })
            .then((response)=>{


                dispatch({type: GET_EXHIBITS, payload: response.data})
            })
            .catch((err)=>{
                console.log(err)
                 dispatch({type: GET_EXHIBITS_ERROR })
            })
    }
};