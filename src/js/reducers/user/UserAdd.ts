//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { UserAddState } from '../../model/state/UserState';
import { UserDto } from '../../model/dto/UserDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultAddState: UserAddState = {
    input: {
            username: new ValidatableInput(),
            email: new ValidatableInput(),
            firstName: new ValidatableInput(),
            lastName: new ValidatableInput(),
            password: new ValidatableInput(),
            confirm: new ValidatableInput()
        },
    visible: false,
    isValid: false
}

export const reducer: Reducer<UserAddState> = (state: UserAddState = defaultAddState, action: Action): UserAddState => {
    //Add and Edit listen to similar events; short circuit if not active
    if(!state.visible 
        && action.type !== ActionType.USER_OPEN_ADD)
            return state; 
    
    const newState = copy<UserAddState>(state);
    
    switch(action.type) {
        case ActionType.USER_OPEN_ADD:
            newState.visible = true;
            return newState;

        case ActionType.USER_CANCEL_ADD:
            newState.visible = false;
            return newState;

        case ActionType.USER_CHANGE_USERNAME_INPUT:
            newState.input.username.value = action.payload;
            return newState;

        case ActionType.USER_CHANGE_PASSWORD_INPUT:
            newState.input.password.value = action.payload;
            return newState;

        case ActionType.USER_CHANGE_CONFIRM_INPUT:
            newState.input.confirm.value = action.payload;
            return newState;

        case ActionType.USER_CHANGE_FIRSTNAME_INPUT:
            newState.input.firstName.value = action.payload;
            return newState;

        case ActionType.USER_CHANGE_LASTNAME_INPUT:
            newState.input.lastName.value = action.payload;
            return newState;

        case ActionType.USER_CHANGE_EMAIL_INPUT:
            newState.input.email.value = action.payload;
            return newState;

        case ActionType.USER_INVALID_SUBMIT:
            return action.payload;

        case ActionType.USER_ADD_SUCCESS:
            const reseted = defaultAddState;
            reseted.visible = false;
            return reseted;
       
        default: return state;
    }
};
