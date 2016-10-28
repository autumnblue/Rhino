import { AddActionCreator } from '../crud/AddActionCreator'
import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IEmailServerService } from '../../service/emailServer/IEmailServerService';
import { ServiceType } from '../../service/ServiceFactory';
import { EmailServerAddState, EmailServerForm } from '../../model/state/EmailServerState';
import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { EmailServerFormValidation } from '../../validation/client/emailServer/EmailServerFormValidation';

class ActionCreator extends AddActionCreator<IEmailServerService> {
    constructor() {
        super(ServiceType.EMAIL_SERVER);
    }

    public changeUseTlsInput(dispatch, value: string) {
        dispatch({
            type: ActionType.EMAIL_SERVER_CHANGE_USE_TLS_INPUT,
            payload: value
        });
    }

    public changeTestRecipientInput(dispatch, value: string) {
        dispatch({
        type: ActionType.EMAIL_SERVER_CHANGE_TEST_RECIPIENT_INPUT,
            payload: value
        });
    }

    public changeHostInput(dispatch, value: string) {
        dispatch({
        type: ActionType.EMAIL_SERVER_CHANGE_HOST_INPUT,
            payload: value
        });
    }

    public changeLoginInput(dispatch, value: string) {
        dispatch({
        type: ActionType.EMAIL_SERVER_CHANGE_LOGIN_INPUT,
            payload: value
        });
    }

    public changePasswordInput(dispatch, value: string) {
        dispatch({
        type: ActionType.EMAIL_SERVER_CHANGE_PASSWORD_INPUT,
            payload: value
        });
    }

    public changePortInput(dispatch, value: string) {
        dispatch({
        type: ActionType.EMAIL_SERVER_CHANGE_PORT_INPUT,
            payload: value
        });
    }

    protected inputToDto(input: EmailServerForm): EmailServerDto {
        return {
            use_tls: input.useTls.value,
            test_recipient: input.testRecipient.value,
            host: input.host.value,
            login: input.login.value,
            password: input.password.value,
            port: input.port.value,
            commit: true
        }
    }

    protected localValidate(state: EmailServerAddState): EmailServerAddState {
        return EmailServerFormValidation.validate(state);
    }
}

export const EmailServerAddAction: ActionCreator = new ActionCreator();