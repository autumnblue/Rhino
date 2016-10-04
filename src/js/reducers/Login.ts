import { Reducer } from 'redux';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { LoginState } from '../model/state/LoginState';
import { copy } from '../common/Util';
import { ValidatableInput } from '../common/validation/ValidatableInput';

const defaultState = {
    input: {
            host: new ValidatableInput(),
            port: new ValidatableInput(),
            username: new ValidatableInput(),
            password: new ValidatableInput()
        },
    isValid: false
}

//http://stackoverflow.com/a/39200433
//https://github.com/reactjs/redux/issues/454
export const reducer: Reducer<LoginState> = (state = defaultState, action: Action): LoginState => {
        const newState = copy<LoginState>(state);

        switch(action.type) {
            case ActionType.CHANGE_LOGIN_HOST:             
                newState.input.host.value = action.payload;
                return newState;

            case ActionType.CHANGE_LOGIN_PORT:             
                newState.input.port.value = action.payload;
                return newState;

            case ActionType.CHANGE_LOGIN_USERNAME:             
                newState.input.username.value = action.payload;
                return newState;

            case ActionType.CHANGE_LOGIN_PASSWORD:             
                newState.input.password.value = action.payload;
                return newState;

            default: return state;
        }
};