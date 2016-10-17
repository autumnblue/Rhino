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
        if(this.localValidate(dispatch, state)) {
            this.initSocket(
                state.input.host.value, 
                state.input.port.value);

            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    const username = state.input.username.value;
                    const password = state.input.password.value;
                    this.login(dispatch, username, password);
                }    
            })
        }
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
                type: ActionType.LOGIN_INVALID_SUBMIT,
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
                    type: ActionType.LOGIN_INVALID_SUBMIT,
                    payload: validated
                });
            }

            return valid
        });
    }

    private initSocket(host: string, port: number) {
        const socket = {
            host: host,
            port: port
        }
        CurrentUser.Session.setSocket(socket);
    }

    public changeHost(dispatch, value: string): void {
        dispatch({
            type: ActionType.LOGIN_CHANGE_HOST_INPUT,
            payload: value
        });
    }

    public changePort(dispatch, value: string): void {
        dispatch({
            type: ActionType.LOGIN_CHANGE_PORT_INPUT,
            payload: value
        });
    }

    public changeUsername(dispatch, value: string): void {
        dispatch({
            type: ActionType.LOGIN_CHANGE_USERNAME_INPUT,
            payload: value
        });
    }

    public changePassword(dispatch, value: string): void {
        dispatch({
            type: ActionType.LOGIN_CHANGE_PASSWORD_INPUT,
            payload: value
        });
    }

    private getService(): IIdentityService {
        if(!this.service)
            this.service = factory.of<IIdentityService>(ServiceType.IDENTITY); 
        
        return this.service;
    }
}

export const LoginAction: ActionCreator = new ActionCreator();