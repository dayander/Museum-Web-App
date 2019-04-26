import {ADD_APP_SECTION_FORM} from "../actions/types";

const initialState = {
    newExhibitForm:{
        fields:[
            {
                fieldLabel: 'New Exhibit Name',
                fieldID: 'newExhibitName',
                fieldType: 'text',
                component: 'input'
            },

            {
                fieldLabel: 'New Exhibit Subheading',
                fieldID: 'newExhibitSubhead',
                fieldType: 'text',
                component: 'input'
            },

            {
                fieldLabel: 'New Exhibit Main Image',
                fieldID: 'newExhibitMainImage',
                fieldType: 'file',
                component: 'FileInput',
                accept: '.jpg, .png, .jpeg'
            },

            {
                fieldLabel: 'New Exhibit Alternative Text',
                fieldID: 'newExhibitAltText',
                fieldType: 'text',
                component: 'input'
            }


        ]
    },
    addedSections: 1,
    isPublished: false

};


export const dynamicFormReducer=(state=initialState, action) =>{

    switch(action.type) {
        case ADD_APP_SECTION_FORM:
            return{
                ...state,
                newExhibitForm:{
                    ...state.newExhibitForm,
                    fields:[...state.newExhibitForm.fields, ...action.payload]
                },
                addedSections: state.addedSections + 1

        };


        default:
            return state;

    };

};
