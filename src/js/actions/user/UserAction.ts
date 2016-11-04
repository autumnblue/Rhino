import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IUserService } from '../../service/user/IUserService';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { UserEditState, UserAddState } from '../../model/state/UserState';
import { mapUser } from '../../validation/server/mapper/UserValidationResponse';

class ActionCreator {
    private service: IUserService;

    public initPage(dispatch): void {
        this.getService()
        .readUsers()
        .then(dtos => dispatch({
            type: ActionType.USER_INIT,
            payload: dtos
        }));
    }

    public openAdd(dispatch): void {
        dispatch({
            type: ActionType.USER_OPEN_ADD
        });
    }

    public openEdit(dispatch, id: number) {
        this.getService()
        .readSingleUser(id)
        .then(dto => {
            dispatch({
                type: ActionType.USER_OPEN_EDIT,
                payload: dto
            });
        })
    }

    public toggleView(dispatch) {
        dispatch({
            type: ActionType.USER_TOGGLE_VIEW
        });
    }

    private getService(): IUserService {
        if(!this.service)
            this.service = factory.of<IUserService>(ServiceType.USER); 
        
        return this.service;
    }
}

export const UserAction: ActionCreator = new ActionCreator();