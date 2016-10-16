//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { 
    UserState, 
    UserPageState, 
    UserAddState, 
    UserEditState } from '../model/state/UserState';
import { ViewType } from '../model/state/page/ViewType';
import { UserDto } from '../model/dto/UserDto';
import { copy } from '../common/Util';
import { ValidatableInput } from '../common/validation/ValidatableInput';
import { combineReducers } from 'redux'

const defaultListState: UserPageState = {
    view: ViewType.GRID
}

//TODO: paging, etc
const loadUsers = (dtos: UserDto[], state: UserPageState): UserPageState => {
    state.list = dtos.map(dto => {
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

const root: Reducer<UserPageState> = (state: UserPageState = defaultListState, action: Action): UserPageState => {
    switch(action.type) {
        case ActionType.VIEW_USER_LIST:
            return loadUsers(action.payload, 
                copy<UserPageState>(state));

        case ActionType.USER_TOGGLE_VIEW:
            state.view = state.view == ViewType.TABLE
                ? ViewType.GRID
                : ViewType.TABLE
            return copy<UserPageState>(state);
                
        default: return state;
    }
};

const edit: Reducer<UserEditState> = (state: UserEditState = defaultEditState, action: Action): UserEditState => {
    const newState = copy<UserEditState>(state);

    switch(action.type) {
        case ActionType.USER_EDIT_ON:
            return loadSingleUser(action.payload);

        case ActionType.CHANGE_USER_USERNAME:             
            newState.input.username.value = action.payload;
            return newState;

        case ActionType.CHANGE_USER_FIRSTNAME:             
            newState.input.firstName.value = action.payload;
            return newState;

        case ActionType.CHANGE_USER_LASTNAME:             
            newState.input.lastName.value = action.payload;
            return newState;

        case ActionType.CHANGE_USER_EMAIL:             
            newState.input.email.value = action.payload;
            return newState;

        case ActionType.USER_EDIT_CANCEL:
            newState.visible = false;
            return newState;

        default: return state;
    }
};


const add: Reducer<UserAddState> = (state: UserAddState = defaultAddState, action: Action): UserAddState => {
    const newState = copy<UserAddState>(state);
    
    switch(action.type) {
        case ActionType.OPEN_USER_ADD:
            newState.visible = true;
            return newState;

        case ActionType.USER_ADD_CANCEL:
            newState.visible = false;
            return newState;
       
        default: return state;
    }
};

export const reducers = combineReducers<UserState>({
        add: add,
        edit: edit,
        root: root
    })
