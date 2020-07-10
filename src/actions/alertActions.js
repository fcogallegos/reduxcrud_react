import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

//show an alert
export function showAlert(alert) {
    return (dispatch) => {
        dispatch( createAlert(alert) );
    }
}
const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});