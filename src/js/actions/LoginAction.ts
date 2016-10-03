import { Action } from './Action';
import { ActionType } from './ActionType';
import { IUserService } from '../service/user/IUserService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';

class ActionCreator {
    public changeHost(dispatch, value: string): void {
        dispatch({
            type: ActionType.CHANGE_LOGIN_HOST,
            payload: value
        });
    }

    public changePort(dispatch, value: string): void {
        dispatch({
            type: ActionType.CHANGE_LOGIN_PORT,
            payload: value
        });
    }

    public changeUsername(dispatch, value: string): void {
        dispatch({
            type: ActionType.CHANGE_LOGIN_USERNAME,
            payload: value
        });
    }

    public changePassword(dispatch, value: string): void {
        dispatch({
            type: ActionType.CHANGE_LOGIN_PASSWORD,
            payload: value
        });
    }
}

export enum Context {
    HOST,
    PORT,
    USERNAME,
    PASSWORD
}

export const LoginAction: ActionCreator = new ActionCreator();