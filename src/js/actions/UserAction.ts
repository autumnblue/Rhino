import { Action } from './Action';
import { ActionType } from './ActionType';
import { IUserService } from '../service/user/IUserService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';
import { LoginState } from '../model/state/LoginState';
import { LoginFormValidation } from '../validation/client/LoginFormValidation';
import { mapLogin } from '../validation/server/mapper/IdentityValidationResponse';

class ActionCreator {
    private service: IUserService;

    public viewUserList(dispatch): void {
        this.getService()
        .readUsers()
        .then(dtos => dispatch({
            type: ActionType.VIEW_USER_LIST,
            payload: dtos
        }));
    }

    public edit(dispatch, id: number) {
        this.getService()
        .readSingleUser(id)
        .then(dto => {
            dispatch({
                type: ActionType.USER_EDIT_ON,
                payload: dto
            });
        })
    }

    private getService(): IUserService {
        if(!this.service)
            this.service = factory.of<IUserService>(ServiceType.USER); 
        
        return this.service;
    }
}

export const UserAction: ActionCreator = new ActionCreator();