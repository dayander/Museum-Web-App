import {NEW_IMAGE_UPLOAD, REVERT_TO_OLD_IMAGE} from "./types";


export const newImageUpdate=(imageType, path)=>{
    return ({
        type: NEW_IMAGE_UPLOAD,
        payload: {newImage: true, imageType: imageType, path: path},
    })

};


export const revertToOldImage =(imageType, path)=>{

    return ({
        type: REVERT_TO_OLD_IMAGE,
        payload:{newImage: false, imageType: imageType, path: path}
    })
};