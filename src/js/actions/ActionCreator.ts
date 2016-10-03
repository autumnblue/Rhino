import { Action } from './Action';
import { ActionType } from './ActionType';
import { IUserService } from '../service/user/IUserService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';

class ActionCreatorStatic {
    public viewUserList(dispatch): void {
        factory.of<IUserService>(ServiceType.USER)
        .readUsers()
        .then(dtos => dispatch({
            type: ActionType.VIEW_USER_LIST,
            payload: dtos
        }));
    }

    public login(dispatch): void {
        
    }

    public viewClientList():Action {
        return {
            type: ActionType.VIEW_CLIENT_LIST
        }
    }
}

export const ActionCreator: ActionCreatorStatic = new ActionCreatorStatic();