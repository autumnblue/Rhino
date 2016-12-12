import Action from './common/Action';
import FeedbackState from '../model/state/FeedbackState'
import { copy } from './common/Util';

const ALERT_ERR = 'skiff/feedback/ALERT'

export const types = {
    ALERT_ERR
}

export default (state: FeedbackState = {}, action: Action) => {
    switch(action.type) {
        case ALERT_ERR:
            state.errMsg = action.payload;
            return copy<FeedbackState>(state);

        default: return state;
    }
}

export const alertError = (msg: string) => {
    return (dispatch) => {
        dispatch({
            type: ALERT_ERR,
            payload: msg
        });
    }
}
