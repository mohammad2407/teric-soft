export const GET_BMX   =  'GET_BMX';
export const CYCLE_BTN = 'CYCLE_BTN';


export const getData = (data) =>{
    return {
        type:"GET_BMX",
        payload:data
    }
}

export const cycleBtn = (buttons) =>{
    return {
        type:"CYCLE_BTN",
        payload:buttons
    }
}