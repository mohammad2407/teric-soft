import { CYCLE_BTN, GET_BMX } from "./Action";

const init_state = {
    wholeData :[],
    buttons :[]

}

export const Reducer = (state = init_state, {payload,type}) =>{

    switch (type) {
        case GET_BMX:
            return{
                ...state,
                wholeData: payload
            }
        
        case CYCLE_BTN:
            return{
                ...state,
                buttons:payload
            }
        default:
            return state
    }
}