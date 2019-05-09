import {combineReducers} from 'redux';
import {iOSAppReducer} from "./iOSAppReducer";
import {authReducer} from "./auth";
import {reducer as formReducer} from 'redux-form';
import {dynamicFormReducer} from "./DynamicForms";
import {exhibitReducer} from "./exhibits";
import {singleExhibitReducer} from "./singleExhibit";
import {beaconDeviceReducer} from "./beaconDeviceReducer";
import {roomsReducer} from "./roomsReducer";
import {singleRoomReducer} from "./singleRoomReducer";


export const indexReducer = combineReducers({
    iOSAppReducer:iOSAppReducer,
    auth:authReducer,
    form: formReducer,
    dynamicForm: dynamicFormReducer,
    exhibits: exhibitReducer,
    singleExhibit: singleExhibitReducer,
    beaconDevice: beaconDeviceReducer,
    rooms: roomsReducer,
    singleRoom: singleRoomReducer


});
