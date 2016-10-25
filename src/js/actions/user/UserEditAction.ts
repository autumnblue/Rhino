import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IUserService } from '../../service/user/IUserService';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { UserEditState, EditFields } from '../../model/state/UserState';
import { UserEditValidation } from '../../validation/client/user/UserEditValidation';
import { mapUser } from '../../validation/server/mapper/UserValidationResponse';

class ActionCreator {
    private service: IUserService;

    public submit(dispatch, state: UserEditState): void {
        if(this.localValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.update(dispatch, state.id, state.input);
                }    
            })
        }
    }

    private update(dispatch, id: number, obj: EditFields): void {
        this.getService()
        .updateUser({
            id: id,
            username: obj.username.value, 
            first_name: obj.firstName.value,
            last_name: obj.lastName.value,
            email: obj.email.value, 
            commit: true
        })
        .then(updated => 
            dispatch({
                type: ActionType.USER_EDIT_SUCCESS,
                payload: updated
            })
        );
    }

     private localValidate(dispatch, state: UserEditState): boolean {
        const validated = UserEditValidation.validate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.USER_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: UserEditState): Promise<boolean> {
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
            type: ActionType.USER_CANCEL_EDIT
        })
    }

    public remove(dispatch, id: number) {
        this.getService()
        .deleteUser(id)
        .then(removed => 
            dispatch({
                type: ActionType.USER_REMOVE_SUCCESS,
                payload: id
            })
        );
    }

    public changeUsernameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.USER_CHANGE_USERNAME_INPUT,
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

export const UserEditAction: ActionCreator = new ActionCreator();