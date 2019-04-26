import {ADD_APP_SECTION_FORM} from "./types";

export const addAppSection = (addedSections) =>{


    const appSectionData = [
        {
            fieldLabel: `New Exhibit Subheading ${addedSections}`,
            fieldID: `newExhibitSubhead-${addedSections}`,
            fieldType: 'text',
            component: 'input'
        },

        {
            fieldLabel: `New Exhibit Sub Image ${addedSections}`,
            fieldID: `newExhibitMainImage-${addedSections}`,
            fieldType: 'file',
            component: 'FileInput',
            accept: '.jpg, .png, .jpeg'
        },

        {
            fieldLabel: `New Exhibit Sub Image ${addedSections} Alternative Text`,
            fieldID: `newExhibitAltText-${addedSections}`,
            fieldType: 'text',
            component: 'input'
        },
        {
            fieldLabel: `New Exhibit Sub Heading ${addedSections} Description Text`,
            fieldID: `newExhibitDescriptionText-${addedSections}`,
            fieldType: 'textarea',
            component: 'input'
        }
        ]

    ;


    return ({
        type: ADD_APP_SECTION_FORM,
        payload: appSectionData,
    })


};