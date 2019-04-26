import {GET_SINGLE_EXHIBIT, NEW_IMAGE_UPLOAD, REVERT_TO_OLD_IMAGE, UPDATE_EXHIBIT} from "../actions/types";
import update from 'immutability-helper';


const initialState = {
        name: '',
        subHead: '',
        mainImg: {altText:'', path: '', filename: '', newImage: false},
        description: '',
        appSections:[{
            exhibitID: '',
            sectionHeading: '',
            sectionImageAltText: '',
            sectionImagePath:'',
            sectionDescription: '',
            order: 0,
            newImage:false
        }],
        published: true
    };




export const singleExhibitReducer= (state = initialState, action) =>{

    switch (action.type){
        case GET_SINGLE_EXHIBIT:
            return{...action.payload};


        case UPDATE_EXHIBIT:
            return{...action.payload};

        case NEW_IMAGE_UPLOAD:

            if(action.payload.path === state.mainImg.path){
                return{
                    ...state,
                    mainImg:{
                        ...state.mainImg,
                        newImage: action.payload.newImage

                    }
                };


            }else{

                const appSectionIndexToUpdate = state.appSections.findIndex(item => item.sectionImagePath === action.payload.path);


                return update(state,{
                        appSections:{
                            [appSectionIndexToUpdate]:{
                                newImage:{$set: action.payload.newImage}
                            }
                        }
                    }

                    )

                }

        case REVERT_TO_OLD_IMAGE:
            if(action.payload.path === state.mainImg.path) {
                return {
                    ...state,
                    mainImg: {
                        ...state.mainImg,
                        newImage: action.payload.newImage

                    }
                }
            }
            else {
                const appSectionIndexToUpdate = state.appSections.findIndex(item => item.sectionImagePath === action.payload.path);


                return update(state,{
                        appSections:{
                            [appSectionIndexToUpdate]:{
                                newImage:{$set: action.payload.newImage}
                            }
                        }
                    }

                )
            }




        default:
            return state
    }


};