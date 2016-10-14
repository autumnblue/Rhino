import { Action } from './Action';
import { ActionType } from './ActionType';
import { IIdentityService } from '../service/identity/IIdentityService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';
import { LoginState } from '../model/state/LoginState';
import { LoginFormValidation } from '../validation/client/LoginFormValidation';
import { mapLogin } from '../validation/server/mapper/IdentityValidationResponse';
import { CurrentUser } from '../CurrentUser';

class ActionCreator {
    public clickIdentity(dispatch) {
        dispatch({
            type: ActionType.CLICK_ID_MENU
        });
    } 

    public clickConfig(dispatch) {
        dispatch({
            type: ActionType.CLICK_CONFIG_MENU
        });
    }   
}

export const NaviAction: ActionCreator = new ActionCreator();