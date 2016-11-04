import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IUserService } from '../../service/user/IUserService';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { UserAddState, AddFields } from '../../model/state/UserState';
import { UserAddValidation } from '../../validation/client/user/UserAddValidation';
import { mapUser } from '../../validation/server/mapper/UserValidationResponse';
import { UserAction } from './UserAction';

class ActionCreator {
    private service: IUserService;

    public submit(dispatch, state: UserAddState): void {
        if(this.localValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.create(dispatch, state.input);
                }    
            })
        }
    }

    private create(dispatch, obj: AddFields): void {
       this.getService().createUser({
           username: obj.username.value,
           password: obj.password.value,
           first_name: obj.firstName.value,
           last_name: obj.lastName.value,
           email: obj.email.value,
           commit: true
       })
       .then(created => {
            dispatch({
                type: ActionType.USER_ADD_SUCCESS,
                payload: created
            })
        });
    }

    private localValidate(dispatch, state: UserAddState): boolean {
        const validated = UserAddValidation.validate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.USER_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: UserAddState): Promise<boolean> {
        return Promise.resolve(true);
        // const input = state.input;            
        // return this.getService()
        // .validate({ 
        //     username: input.username.value, 
        //     first_name: input.firstName.value,
        //     last_name: input.lastName.value,
        //     email: input.email.value 
        // })
        // .then(response => mapUser(response))
        // .then(validated => {
        //     const valid = validated.isValid;
        //     if(!valid) {
        //         dispatch({
        //             type: ActionType.USER_INVALID_SUBMIT,
        //             payload: validated
        //         });
        //     }

        //     return valid
        // });
    }

    public cancel(dispatch) {
        dispatch({
            type: ActionType.USER_CANCEL_ADD
        })
    }

    public changeUsernameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_USERNAME_INPUT,
            payload: value
        });
    }

    public changePasswordInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_PASSWORD_INPUT,
            payload: value
        });
    }

    public changeConfirmInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_CONFIRM_INPUT,
            payload: value
        });
    }

    public changeFirstNameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_FIRSTNAME_INPUT,
            payload: value
        });
    }

    public changeLastNameInput(dispatch, value: string) {
        dispatch({
        type: ActionType.USER_CHANGE_LASTNAME_INPUT,
            payload: value
        });
    }

    public changeEmailInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_EMAIL_INPUT,
            payload: value
        });
    }

    private getService(): IUserService {
        if(!this.service)
            this.service = factory.of<IUserService>(ServiceType.USER); 
        
        return this.service;
    }
}

export const UserAddAction: ActionCreator = new ActionCreator();