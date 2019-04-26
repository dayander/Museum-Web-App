import {DELETE_EXHIBIT, GET_EXHIBITS} from "../actions/types";

const initialState = [
    {
    name: '',
    subHead: '',
    mainImg: {altText:'', path: '', filename: ''},
    description: '',
    appSections:[{
        exhibitID: '',
        sectionHeading: '',
        sectionImageAltText: '',
        sectionImagePath:'',
        sectionDescription: '',
        order: 0
    }],
    published: true
}

];




export const exhibitReducer= (state = initialState, action) =>{

    switch (action.type){
        case GET_EXHIBITS:
            return[...action.payload];


        case DELETE_EXHIBIT:
            console.log('action', action.payload);
            console.log([...state.filter(exhibit => exhibit._id !== action.payload._id)])
            return [...state.filter(exhibit => exhibit._id !== action.payload._id)];








        default:
            return state
    }


};