import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IIdentityService } from '../../service/identity/IIdentityService';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { LoginState } from '../../model/state/LoginState';
import { LoginFormValidation } from '../../validation/client/LoginFormValidation';
import { mapLogin } from '../../validation/server/mapper/IdentityValidationResponse';
import { CurrentUser } from '../../CurrentUser';

class ActionCreator {
    private service: IIdentityService;

    public submit(dispatch, state: LoginState): void {
       
    }

    private login(dispatch, username: string, password: string): void {
        this.getService()
        .login({ username: username, password: password })
        .then(authz => dispatch({
            //check if err
            //ActionType.LOGIN_SUCCESS w/ token payload
            //ActionType.LOGIN_FAIL w/o payload
        }));
    }

    private localValidate(dispatch, state: LoginState): boolean {
        const validated = LoginFormValidation.validate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.PROFILE_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: LoginState): Promise<boolean> {
        const input = state.input;            
        return this.getService()
        .validate({ 
            username: input.username.value, 
            password: input.password.value 
        })
        .then(response => mapLogin(response))
        .then(validated => {
            const valid = validated.isValid;
            if(!valid) {
                dispatch({
                    type: ActionType.PROFILE_INVALID_SUBMIT,
                    payload: validated
                });
            }

            return valid
        });
    }

    public changePasswordInput(dispatch, value: string): void {

    }

    public changeNewPasswordInput(dispatch, value: string): void {

    }

    public changeConfirmInput(dispatch, value: string): void {

    }

    private getService(): IIdentityService {
        if(!this.service)
            this.service = factory.of<IIdentityService>(ServiceType.IDENTITY); 
        
        return this.service;
    }
}

export const ProfileAction: ActionCreator = new ActionCreator();