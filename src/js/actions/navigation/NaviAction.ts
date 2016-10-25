import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { Identity } from '../../security/Identity';
import { CurrentUser } from '../../CurrentUser';

class ActionCreator {
    public clickIdentity(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_ID
        });
    } 

    public click(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK
        });
    }

    public clickConfig(dispatch) {
        dispatch({
            type: ActionType.MENU_CLICK_CONFIG
        });
    }

    public logout(dispatch) {
        Identity.logout();

        dispatch({
            type: ActionType.LOGOUT
        });
    }   
}

export const NaviAction: ActionCreator = new ActionCreator();