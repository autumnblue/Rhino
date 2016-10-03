//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { UserState } from '../model/state/UserState';
import { UserDto } from '../model/dto/UserDto';

//TODO: paging, etc
const loadUsers = (dtos: UserDto[]): UserState => {
    let state: UserState = {};
    state.data = dtos.map(dto => {
        return {
            id: dto.id,
            username: dto.username,
            email: dto.email,
            first_name: dto.first_name,
            last_name: dto.last_name,
            is_active: dto.is_active 
        }
    });
    return state;
}

export const reducer: Reducer<UserState> = (state: UserState = {}, action: Action): UserState => {
        switch(action.type) {
            case ActionType.VIEW_USER_LIST:
                return loadUsers(action.payload);

            default: return state;
        }
};

//---------

// const list: Reducer<UserState> = (state: UserListState = {}, action: Action): UserListState => {

// }

// const edit: Reducer<UserState> = (state: UserEditState = {}, action: Action): UserEditState => {
    
// }

// const create