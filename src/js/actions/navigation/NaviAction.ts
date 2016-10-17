import { Action } from '../Action';
import { ActionType } from '../ActionType';

class ActionCreator {
    public clickIdentity(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_ID
        });
    } 

    public clickConfig(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_CONFIG
        });
    }   
}

export const NaviAction: ActionCreator = new ActionCreator();