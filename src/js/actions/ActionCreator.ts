import { Action } from './Action';
import { ActionType } from './ActionType';

class ActionCreatorStatic {
    public viewClientList():Action {
        return {
            type: ActionType.VIEW_CLIENT_LIST
        }
    }
}

export const ActionCreator: ActionCreatorStatic = new ActionCreatorStatic();