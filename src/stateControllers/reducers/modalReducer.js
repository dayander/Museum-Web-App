import SkiHillData from "../../data/SkiHillData";



const initialState = SkiHillData;


export const OpenAndCloseModal = (state = initialState, action)=>{

    switch (action.type){
        case "SET_MODAL_FILTER":
            const updatedItems = state.map(item => {
                if(item.name === action.skiHill.name){
                    item.modalOpen = action.filter;
                    return { ...item}
                }

                return item
            });
            return updatedItems;
        default:
            return state;

    }

};