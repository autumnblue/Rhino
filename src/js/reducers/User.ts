//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { 
    UserState, 
    UserListState, 
    UserAddState, 
    UserEditState } from '../model/state/UserState';
import { UserDto } from '../model/dto/UserDto';
import { copy } from '../common/Util';
import { ValidatableInput } from '../common/validation/ValidatableInput';
import { combineReducers } from 'redux'

//TODO: paging, etc
const loadUsers = (dtos: UserDto[]): UserListState => {
    let state: UserListState = {};
    state.data = dtos.map(dto => {
        return {
            id: dto.id,
            username: dto.username,
            email: dto.email,
            firstName: dto.first_name,
            lastName: dto.last_name,
            isActive: dto.is_active 
        }
    });

    return state;
}

const loadSingleUser = (dto: UserDto): UserEditState => {
    let state: UserEditState = {};
    state.visible = true;
    
    state.input = {
        username: new ValidatableInput(dto.username),
        email: new ValidatableInput(dto.email),
        firstName: new ValidatableInput(dto.first_name),
        lastName: new ValidatableInput(dto.last_name)
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

const list: Reducer<UserListState> = (state: UserListState = {}, action: Action): UserListState => {
    switch(action.type) {
        case ActionType.VIEW_USER_LIST:
            return loadUsers(action.payload);
                
        default: return state;
    }
};

const add: Reducer<UserAddState> = (state: UserAddState = {}, action: Action): UserAddState => {
    switch(action.type) {
       
        default: return state;
    }
};

const edit: Reducer<UserEditState> = (state: UserEditState = defaultEditState, action: Action): UserEditState => {
    const newState = copy<UserState>(state);

    switch(action.type) {
        case ActionType.USER_EDIT_ON:
            return loadSingleUser(action.payload);

        case ActionType.CHANGE_USER_USERNAME:             
                newState.edit.input.username.value = action.payload;
                return newState;

        case ActionType.CHANGE_USER_FIRSTNAME:             
            newState.edit.input.firstName.value = action.payload;
            return newState;

        case ActionType.CHANGE_USER_LASTNAME:             
            newState.edit.input.lastName.value = action.payload;
            return newState;

        case ActionType.CHANGE_USER_EMAIL:             
            newState.edit.input.email.value = action.payload;
            return newState;

        default: return state;
    }
};

export const reducers = combineReducers<UserState>({
        add: add,
        edit: edit,
        list: list
    })
