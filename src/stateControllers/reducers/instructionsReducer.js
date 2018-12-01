import {instructionsFilters} from "../actions/OpenAndCloseIntructionsHeader";



export const OpenAndCloseInstructions = (state = instructionsFilters.INSTRUCTIONS_OPEN, action)=>{

    switch (action.type){
        case "SET_INSTRUCTIONS_FILTER":
            return action.filter;
        default:

            return state;

    }

};