import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { EmailServerAddState } from '../../model/state/EmailServerState';
import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import * as add from '../crud/AddReducer';

type State = EmailServerAddState;

const defaultAddState = (): State => {
    return {
        input: {
                useTls: new ValidatableInput(),
                testRecipient: new ValidatableInput(),
                host: new ValidatableInput(),
                port: new ValidatableInput(),
                login: new ValidatableInput(),
                password: new ValidatableInput(),
            },
        visible: false,
        isValid: false
    }
}

export const reducer = add.reducer<State>(defaultAddState, (state, action) => {
    const newState = copy<State>(state);
    switch(action.type) {
        case ActionType.EMAIL_SERVER_CHANGE_HOST_INPUT:
            newState.input.host.value = action.payload;
            return newState;

        case ActionType.EMAIL_SERVER_CHANGE_PORT_INPUT:
            newState.input.port.value = action.payload;
            return newState;

        case ActionType.EMAIL_SERVER_CHANGE_LOGIN_INPUT:
            newState.input.login.value = action.payload;
            return newState;
    
        case ActionType.EMAIL_SERVER_CHANGE_PASSWORD_INPUT:
            newState.input.password.value = action.payload;
            return newState;

        default: return state;
    }
});

