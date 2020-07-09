import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';


//every redicer has it a state
const initialState = {
    alert: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}