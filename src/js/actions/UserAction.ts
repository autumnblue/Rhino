import { Action } from './Action';
import { ActionType } from './ActionType';
import { IUserService } from '../service/user/IUserService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';
import { UserEditState, UserAddState, Fields } from '../model/state/UserState';
import { UserFormValidation } from '../validation/client/UserFormValidation';
import { mapUser } from '../validation/server/mapper/UserValidationResponse';

type UserInputState = UserEditState | UserAddState;

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

    public submit(dispatch, state: UserInputState): void {
        if(this.localValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.update(dispatch, state.input);
                }    
            })
        }
    }

    private update(dispatch, obj: Fields): void {
        this.getService()
        .updateUser({ 
            username: obj.username.value, 
            first_name: obj.firstName.value,
            last_name: obj.lastName.value,
            email: obj.email.value 
        })
        .then(updated => dispatch({
            //check if err
            //ActionType.USER_UPDATE_SUCESS w/ token payload
            //ActionType.USER_UPDATE_FAIL w/o payload
        }));
    }

     private localValidate(dispatch, state: UserInputState): boolean {
        const validated = UserFormValidation.validate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.INVALID_USER_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: UserInputState): Promise<boolean> {
        const input = state.input;            
        return this.getService()
        .validate({ 
            username: input.username.value, 
            first_name: input.firstName.value,
            last_name: input.lastName.value,
            email: input.email.value 
        })
        .then(response => mapUser(response))
        .then(validated => {
            const valid = validated.isValid;
            if(!valid) {
                dispatch({
                    type: ActionType.INVALID_USER_SUBMIT,
                    payload: validated
                });
            }

            return valid
        });
    }

    public changeUsername(dispatch, value: string) {
        dispatch({
            type: ActionType.CHANGE_USER_USERNAME,
            payload: value
        });
    }

    public changeFirstName(dispatch, value: string) {
        dispatch({
            type: ActionType.CHANGE_USER_FIRSTNAME,
            payload: value
        });
    }

    public changeLastName(dispatch, value: string) {
        dispatch({
            type: ActionType.CHANGE_USER_LASTNAME,
            payload: value
        });
    }

    public changeEmail(dispatch, value: string) {
        dispatch({
            type: ActionType.CHANGE_USER_EMAIL,
            payload: value
        });
    }

    private getService(): IUserService {
        if(!this.service)
            this.service = factory.of<IUserService>(ServiceType.USER); 
        
        return this.service;
    }
}

export const UserAction: ActionCreator = new ActionCreator();