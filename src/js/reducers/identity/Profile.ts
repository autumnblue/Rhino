import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { ProfileState } from '../../model/state/ProfileState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultState: ProfileState = {
    input: {
            password: new ValidatableInput(),
            newPassword: new ValidatableInput(),
            confirm: new ValidatableInput()
        },
    isValid: false
}

export const reducer: Reducer<ProfileState> = (state = defaultState, action: Action): ProfileState => {
    const newState = copy<ProfileState>(state);

    switch(action.type) {
        case ActionType.PROFILE_CHANGE_PASSWORD_INPUT:             
            newState.input.password.value = action.payload;
            return newState;

        case ActionType.PROFILE_CHANGE_NEW_PASSWORD_INPUT:             
            newState.input.newPassword.value = action.payload;
            return newState;

        case ActionType.PROFILE_CHANGE_CONFIRM_INPUT:             
            newState.input.confirm.value = action.payload;
            return newState;

        default: return state;
    }
};