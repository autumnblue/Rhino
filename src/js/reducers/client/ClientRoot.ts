import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { PageState } from '../../model/state/ClientState';
import { ViewType } from '../../model/state/page/ViewType';
import { PagedDto } from '../../model/dto/PagedDto';
import { ClientDto } from '../../model/dto/ClientDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultListState: PageState = {
    view: ViewType.GRID
}

const loadClients = (dtos: PagedDto<ClientDto>, state: PageState): PageState => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            timezone: dto.default_time_zone 
        }
    });

    return state;
}

//local add for successful CREATE
const pushUser = (dto: ClientDto, state: PageState) => {
    state.list.push({
        id: dto.id,
        name: dto.name,
        url: dto.url,
        timezone: dto.default_time_zone 
    });

    return state;
}

export const reducer: Reducer<PageState> = (state: PageState = defaultListState, action: Action): PageState => {
    //TODO: short curcuit if not on page
    
    switch(action.type) {
        case ActionType.CRUD_INIT:
            return loadClients(action.payload, 
                copy<PageState>(state));

        case ActionType.CRUD_TOGGLE_VIEW:
            state.view = state.view == ViewType.TABLE
                ? ViewType.GRID
                : ViewType.TABLE
            return copy<PageState>(state);

        case ActionType.CRUD_ADD_SUCCESS:
            return pushUser(action.payload,
                copy<PageState>(state));

        default: return state;
    }
};
