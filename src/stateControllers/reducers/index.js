import {combineReducers} from 'redux';
import {iOSAppReducer} from "./iOSAppReducer";
import {authReducer} from "./auth";
import {reducer as formReducer} from 'redux-form';

export const indexReducer = combineReducers({
    iOSAppReducer:iOSAppReducer,
    auth:authReducer,
    form: formReducer,


});
