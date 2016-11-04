//http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { UserPageState } from '../../model/state/UserState';
import { ViewType } from '../../model/state/page/ViewType';
import { PagedDto } from '../../model/dto/PagedDto';
import { UserDto } from '../../model/dto/UserDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultListState: UserPageState = {
    view: ViewType.GRID
}

//TODO: paging, etc
const loadUsers = (dtos: PagedDto<UserDto>, state: UserPageState): UserPageState => {
    state.list = dtos.results.map(dto => {
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

//local add for successful CREATE
const pushUser = (dto: UserDto, state: UserPageState) => {
    state.list.push({
        id: dto.id,
        username: dto.username,
        email: dto.email,
        firstName: dto.last_name,
        lastName: dto.last_name,
        isActive: dto.is_active
    });

    return state;
}

const refreshUser = (dto: UserDto, state: UserPageState) => {
    const user = state.list.filter(user => {
        return user.id === dto.id
    })[0];
    const idx = state.list.indexOf(user); 

    state.list[idx] = {
        id: dto.id,
        username: dto.username,
        email: dto.email,
        firstName: dto.first_name,
        lastName: dto.last_name,
        isActive: dto.is_active
    }

    return state;
}

export const reducer: Reducer<UserPageState> = (state: UserPageState = defaultListState, action: Action): UserPageState => {
    switch(action.type) {
        case ActionType.USER_INIT:
            return loadUsers(action.payload, 
                copy<UserPageState>(state));

        case ActionType.USER_TOGGLE_VIEW:
            state.view = state.view == ViewType.TABLE
                ? ViewType.GRID
                : ViewType.TABLE
            return copy<UserPageState>(state);

        case ActionType.USER_ADD_SUCCESS:
            return pushUser(action.payload,
                copy<UserPageState>(state));

        case ActionType.USER_EDIT_SUCCESS:
            return refreshUser(action.payload,
                copy<UserPageState>(state));

        default: return state;
    }
};
