import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { UserEditState } from '../../model/state/UserState';
import { UserDto } from '../../model/dto/UserDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const loadSingleUser = (dto: UserDto): UserEditState => {
    let state: UserEditState = { isValid: false };
    state.id = dto['user'].id;
    state.visible = true;
    
    state.input = {
        username: new ValidatableInput(dto['user'].username),
        email: new ValidatableInput(dto['user'].email),
        firstName: new ValidatableInput(dto['user'].first_name),
        lastName: new ValidatableInput(dto['user'].last_name)
    }

    return state;
}

const defaultEditState: UserEditState = {
    input: {
            username: new ValidatableInput(),
            email: new ValidatableInput(),
            firstName: new ValidatableInput(),
            lastName: new ValidatableInput()
        },
    visible: false,
    isValid: false
}

export const reducer: Reducer<UserEditState> = (state: UserEditState = defaultEditState, action: Action): UserEditState => {
    //Add and Edit listen to similar events; short circuit if not active
    if(!state.visible 
        && action.type !== ActionType.USER_OPEN_EDIT)
            return state; 

    const newState = copy<UserEditState>(state);

    switch(action.type) {
        case ActionType.USER_OPEN_EDIT:
            return loadSingleUser(action.payload);

        case ActionType.USER_CHANGE_USERNAME_INPUT:             
            newState.input.username.value = action.payload;
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

        case ActionType.USER_CANCEL_EDIT:
            newState.visible = false;
            return newState;

        case ActionType.USER_EDIT_SUCCESS:
            const reseted = defaultEditState;
            reseted.visible = false;
            return reseted;

        case ActionType.USER_REMOVE_SUCCESS:
            newState.visible = false;
            return newState;

        default: return state;
    }
};
